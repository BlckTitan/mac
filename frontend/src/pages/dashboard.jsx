import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];


export default function Dashboard() {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)

  console.log(watch("example"))

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
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
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

/*

<main>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <label htmlFor="title">Title</label>
            <input 
              id='title' 
              placeholder='necessitatibus, esse aperiam velit nesciunt, hic dignissimos deserunt.' 
              {...register("title", {required: true})} 
            />
            {errors.title && <span>This field is required</span>}

            <label htmlFor="description">Description</label>
            <textarea 
              id='description' 
              placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Possimus voluptatum quia provident nisi iure quae' 
              {...register("description", { required: true })}
            >
            </textarea>
            {errors.description && <span>This field is required</span>}

            <label htmlFor="feature">Feature</label>
            <input id='feature' {...register("feature", { required: true })} />
            {errors.feature && <span>This field is required</span>}

            <label htmlFor="tag">Tag</label>
            <input id='tag' placeholder='drugs' {...register("tag", { required: true })} />
            {errors.tag && <span>This field is required</span>}

            

            <button type="submit">
              submit
            </button>
          </form>
 
    </main>
    */ 