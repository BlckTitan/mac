import { Breadcrumb, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'

export default function ContentComponent() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

  return (
    <>
    
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            dashboard
          </div>
        </Content>
    </>
  )
}
