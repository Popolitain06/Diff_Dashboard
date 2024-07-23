import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";
import { authCredentials } from "../../providers";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={<h1 style={{  }}>Diffazur Dashboard</h1>}
      formProps={{
        initialValues: authCredentials,
      }}
    />  
  );
};
