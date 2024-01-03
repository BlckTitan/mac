import { Breadcrumb, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { useForm } from 'react-hook-form';

export default function CreatePostContent() {

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
      </div>
    </Content>
</>
  )
}
