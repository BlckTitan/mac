import { AppstoreOutlined, FormOutlined, HomeOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to='dashboard'>Dashboard</Link>, '1', <AppstoreOutlined />),
  getItem('Home', '2', <HomeOutlined />),
  getItem('Settings', '3', <SettingOutlined />),
  getItem(<Link to='author/authors'>Authors</Link>, 'sub1', <UserOutlined />, [
    getItem(<Link to='author/createAuthor'>Create Author</Link>, '4'),
  ]),
  getItem(<Link to='blogs'>Blog Post</Link>, 'sub2', <FormOutlined />, [
    getItem(<Link to='blog/newBlog'>New Blog</Link>, '5'),
  ]),
];

export default function DashboardSidebar() {

  
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertica mb-10" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    </>
  )
}
