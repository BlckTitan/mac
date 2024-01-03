import React from 'react';

import { Layout, theme } from 'antd';
import ContentComponent from '../components/content.jsx';
import DashboardFooter from '../components/dashboardFooter.jsx';
import DashboardSidebar from '../components/dashboardSidebar.jsx';
const { Header } = Layout;



export default function DashboardComponent() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
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
        <ContentComponent/>
        <DashboardFooter/>
      </Layout>
    </Layout>
  )
}
