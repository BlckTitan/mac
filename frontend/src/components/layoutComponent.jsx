import { useNavigate } from "react-router-dom";
import { Button, Layout, theme} from 'antd';

// components
import DashboardFooter from './dashboardFooter.jsx';
import DashboardSidebar from './dashboardSidebar.jsx';
import { Content } from "antd/es/layout/layout.js";
const { Header } = Layout;

const LayoutComponent = ({children}) => {

  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('author');

    navigate('/login')
  }

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>

      {
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          <DashboardSidebar/>
          
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
              className="flex justify-between items-center"
            >
              <h2 className="text-regal-blue text-3xl font-bold">MAC</h2>
              <Button onClick={handleLogout} className="font-semibold text-regal-blue border-0 shadow-none">
                Logout
              </Button>
            </Header>

            <Content
              style={{
                margin: '0 16px',
              }}
            >

              <div
                style={{
                  padding: 24,
                  marginTop: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {children}
              </div>
            </Content>
            <DashboardFooter/>
          </Layout>
        </Layout>
      }
    </>
  )
};

export default LayoutComponent;
