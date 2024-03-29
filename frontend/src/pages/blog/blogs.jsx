import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ExclamationCircleFilled, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Modal, Space } from 'antd';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

// constant variables
import {baseUrl} from '../../constants';
import Loading from '../../components/loading';
import { loggedIn } from '../../utils/func';
import LayoutComponent from '../../components/layoutComponent';

const LOGGED_IN = loggedIn()


export default function Blogs() {
  
  const [blogData, setBlogData] = useState('')

  const navigate = useNavigate()

  const { confirm } = Modal;

  
  useEffect(() => {

    if(!LOGGED_IN) return navigate('/login')

    getAllBlogs();
    
  }, [setBlogData])

  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Are you sure to delete this blog post?',
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',

      onOk() {
        
        axios.delete(`${baseUrl}/blog/${id}`, {
          headers: {
            'x-auth-token': `${LOGGED_IN[2]}`
          }
      })
        .then((res) => {
          getAllBlogs()
        })
        .catch((err) => {
          toast.error(err.response.data, {position: 'top-right', toastId: 6})
        })
      }
    });
  };

  const getAllBlogs = () => {

    axios.get(`${baseUrl}/blog`, {
      headers: {
        'x-auth-token': `${LOGGED_IN[2]}`
      }
    })
    .then((res) => {
      setBlogData(res.data)
    })
    .catch((err) => {
      toast.error(err.response.data, {position: 'top-right', toastId: 7})
    })

  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  if(!blogData) return <Loading/>

  return (
    <LayoutComponent>

      {
            (!blogData) ?

            <Loading/> :

            <>
              <header className='mb-8'>
                <h2 className='text-2xl font-semibold'>All Blog Posts</h2>
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
                      title={<Link to={`/blog/${item?._id}`}>{item.blog?.title}</Link>}
                      description={item.blog?.description}
                      author={item.author?.name}
                    />

                    <small className='ml-10'>{item.author?.name}</small>
                    <div className="ml-10 mt-2">

                      <Link to={`/blog/editBlog/${item?._id}`} className="mr-4 text-blue-600 font-semibold">Edit</Link>

                      <Button
                        onClick={() => showDeleteConfirm(item?._id)}
                        className='bg-red-600 text-white font-semibold hover:text-white'
                      >
                        Delete
                      </Button>
                      

                    </div>
                    
                  </List.Item>
                )}
              />
              </>
        }
    </LayoutComponent>
  )
}
