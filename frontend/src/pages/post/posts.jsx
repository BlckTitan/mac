import React, { useEffect, useState } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

// constant variables
import {baseUrl} from '../../constants';

export default function PostsComponent() {

  
  const [blogData, setBlogData] = useState('')

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  useEffect(() => {

    axios.get(`${baseUrl}/blog`)
    .then((res) => {
      setBlogData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [setBlogData])

  return (
    <>
      <header className='mb-8'>
        <h2 className='text-2xl font-semibold'>All Posts</h2>
      </header>
      
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={blogData}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >

            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<Link to={`/post/${item.blog?._id}`}>{item.blog?.title}</Link>}
              description={item.blog?.description}
              author={item.author?.name}
            />

            <small className='ml-10'>{item.author?.name}</small>
            
          </List.Item>
        )}
      />
    </>
  )
}
