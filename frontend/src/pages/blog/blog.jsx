import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Space, Tag } from 'antd';

// constant variables
import {baseUrl} from '../../constants';
import Loading from '../../components/loading';
import { loggedIn } from '../../utils/func';
import LayoutComponent from '../../components/layoutComponent';


const LOGGED_IN = loggedIn()

export default function Blog() {

  
  const [blogData, setBlogData] = useState('')
  const blogId = useParams()
  const navigate = useNavigate()

  const getBlogPost = () => {

    axios.get(`${baseUrl}/blog/${blogId.id}`, {
      headers: {
        'x-auth-token': `${LOGGED_IN[2]}`
      }
    })
    .then((res) => {
      setBlogData(res.data)
    })
    .catch((err) => {
      toast.error(err.response.data, {position: 'top-right', toastId: 2})
    })
  }

  useEffect(() => {
    if(!LOGGED_IN) return navigate('/login')
    getBlogPost()  
  }, [setBlogData])
  
  return (
    <LayoutComponent>
        {
            (!blogData) ?

            <Loading/> :

            <>
                <header className='mb-8 flex flex-col xl:flex-row justify-between items-start xl:items-center'>
                    <h2 className='text-2xl font-semibold'>{blogData?.blog.title}</h2>
                    <Link to={`/blog/editBlog/${blogData?._id}`} className='text-xl text-blue-500 mt-4 xl:mt-0'>Edit</Link>
                </header>

                <div className="w-full ">
                    <p>{blogData?.blog?.description}</p>

                    <Space size={[0, 8]} wrap className='mt-4'>
                        <Tag>{blogData?.blog.tags}</Tag>
                    </Space>

                    <div className='mt-4 flex flex-col'>
                        <span className='text-gray-500'>{blogData?.author.name}</span>
                        <span className='text-gray-500'>{blogData?.dateCreated}</span>
                    </div>
                </div>
            </>
        }
    </LayoutComponent>
  )
}
