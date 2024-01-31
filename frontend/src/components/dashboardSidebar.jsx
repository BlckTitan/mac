
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppstoreOutlined, FormOutlined, HomeOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { loggedIn } from '../utils/func';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const LOGGED_IN = loggedIn()

export default function DashboardSidebar() {

  
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate()
  
  useEffect(() => {
    if(!LOGGED_IN) return navigate('/login')
  }, [])


  const items = [
    getItem(<Link to='/dashboard'>Dashboard</Link>, '1', <AppstoreOutlined />),
    getItem('Home', '2', <HomeOutlined />),
    getItem('Settings', '3', <SettingOutlined />),
    (LOGGED_IN && LOGGED_IN[1] === 'administrator') && 
      getItem(<Link to='/author/authors'>Authors</Link>, 'sub1', <UserOutlined />, [
        getItem(<Link to='/author/createAuthor'>Create Author</Link>, '4'),
      ]),
    getItem(<Link to='/blogs'>Blog Post</Link>, 'sub2', <FormOutlined />, [
      getItem(<Link to='/blog/newBlog'>New Blog</Link>, '5'),
    ]),
  ];

  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertica mb-10" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    </>
  )
}
