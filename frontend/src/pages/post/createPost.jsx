import { Layout, theme } from 'antd';
import React from 'react'
import { useForm } from 'react-hook-form';
import DashboardSidebar from '../../components/dashboardSidebar';
import { Header } from 'antd/es/layout/layout';
import ContentComponent from '../../components/content';
import DashboardFooter from '../../components/dashboardFooter';
import CreatePostContent from '../../components/createPostContent';

export default function CreatePost() {

    const {
        token: { colorBgContainer },
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
      <DashboardSidebar/>
      
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />


        <CreatePostContent/>
        <DashboardFooter/>
      </Layout>
    </Layout>
  )
}
