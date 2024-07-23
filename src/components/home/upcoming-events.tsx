import { CalendarOutlined } from '@ant-design/icons'
import { Badge, Card, Divider, List } from 'antd'
import React, { useState } from 'react'
import { Text } from '../text'
import UpcomingEventsSkeleton from '../skeleton/upcoming-events'
import { getDate } from '@/utilities/helpers'
import { useList } from '@refinedev/core'
import { DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY } from '@/graphql/queries'
import dayjs from 'dayjs'

const UpcomingEvents = () => {


    const {data, isLoading} = useList({
        resource: 'events',
        pagination: {pageSize: 5},
        sorters: [{
            field: 'startDate', 
            order: 'asc'}],
        filters: [
            {
                field: 'startDate',
                operator: 'lt',
                value: dayjs().format('YYYY-MM-DD')
            }
        ],    
        meta: {
            gqlQuery: DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY
        }
    })

  return (
    <Card
        style={{height: '100%',}}
        headStyle={{padding: '8px 16px'}}
        bodyStyle={{padding: '0 1rem'}}
        title={
            <div
            style={{display: 'flex', gap: '8px', alignItems: 'center'}}
            >

                <CalendarOutlined />
                <Text size='sm' style={{marginLeft: "0.7rem"}}>
                    Evenements a venir
                </Text>

            </div>
        }
    >

        {isLoading ? (
            <List
                itemLayout='horizontal'
                dataSource={Array.from({length: 5}).map((_, index) =>({id: index}))}
                renderItem={() => <UpcomingEventsSkeleton />}
                />

        ) : (
            <List
            itemLayout='horizontal'
            dataSource={data?.data || []}
            renderItem={(item) => {

                const renderDate = getDate(item.startDate, item.endDate)

                return (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Badge color={item.color}/>}
                            title={
                                <Text size="xs">{renderDate}
                                </Text>}
                            description={         
                                <Text ellipsis={{tooltip: true}} strong>
                                {item.title}
                                </Text>}
                        
                        />
                    </List.Item>
                )
            }}
            
            >

            </List>)}
                {!isLoading && data?.data.length === 0 && (
                    <span
                        style={{
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '220px',
                        }}
                    >
                    Aucun évènement
                    </span>
                )}

    </Card>
  )
}

export default UpcomingEvents