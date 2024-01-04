import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme} from 'antd';

// components
import DashboardFooter from './components/dashboardFooter.jsx';
import DashboardSidebar from './components/dashboardSidebar.jsx';
import { Content } from "antd/es/layout/layout.js";
const { Header } = Layout;

const LayoutComponent = () => {

  
  const [currentPage, setCurrentPage] = useState(window.location.pathname)
  
  useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, [currentPage])


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      {
        currentPage === '/' && 
        <div>
          <Outlet />
        </div>
      }

      {
        currentPage !== '/' &&
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
            />
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

                <Outlet/>

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
