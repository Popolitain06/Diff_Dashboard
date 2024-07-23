import { DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources : IResourceItem[] = [

    {
      name: "dashboard",
      list: "/",
      meta: {
          label: "Tableau de bord",
          icon: <DashboardOutlined />,
      }  
    },
    {
      name: "Clients",
      list: "/clients",
      show: "/clients/:id",
      create: "/clients/new",
      edit: "/clients/edit/:id",
      meta: {
          label: "Clients",
          icon: <ShopOutlined />,
      }
    },
    {
      name: "Taches",
      list: "/taches",
      create: "/taches/new",
      edit: "/taches/edit/:id",
      meta: {
          label: "Taches",
          icon: <ProjectOutlined />,
      }
    }
]