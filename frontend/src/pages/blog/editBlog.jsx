import React, { useEffect, useState } from 'react';
import  { useNavigate, useParams }  from "react-router-dom";
import { Button, Form, Input,  } from 'antd';
import axios from 'axios'
import { baseUrl } from '../../constants';
import LoadingComponent from '../../components/loading';
const { TextArea } = Input;

export default function EditBlogPost() {

  const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [editFeature, setEditFeature] = useState('')
    const [editTag, setEditTag] = useState('');
    const [blogData, setBlogData] = useState('')

    const navigate = useNavigate();
    const blogId = useParams()

    const getBlogById = () => {
        axios.get(`${baseUrl}/blog/${blogId.id}`)
        .then((res) => {
            setBlogData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getBlogById()
      
    }, [setBlogData])
    

    const handleSubmit = () => {

        axios.put(`${baseUrl}/blog/${blogId.id}`, 
        {
            title: editTitle || blogData?.blog.title, 
            description: editDescription || blogData?.blog.description, 
            feature: editFeature || blogData?.blog.feature, 
            tags: editTag || blogData?.blog.tags

        }).then((res) => {
            console.log(res.data)
            
            navigate('/blogs')
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    let initialValues = () => {
      if(blogData) return {
        title: blogData?.blog.title,
        description: blogData?.blog.description,
        feature: blogData?.blog.feature,
        tag: blogData?.blog.tags
      }
    }

    initialValues = initialValues()
    

  return (
      <>

        {
            (!blogData) ?

            <LoadingComponent/> :

            <>
              <header className='mb-8'>
                  <h2 className='text-2xl font-semibold'>Edit Blog Post</h2>
              </header>
              
                <Form 
                    autoComplete='off' 
                    labelCol={{span: 4,}} 
                    wrapperCol={{ span: 14, }} 
                    layout="horizontal" 
                    style={{maxWidth: 800,}}
                    initialValues={initialValues}
                >
                  
                    <Form.Item label="Title" name='title' 
                        rules={[
                            {
                                required: true,
                                message: "This field is required."
                            },
                            {whitespace: true},
                            {min:5}
                        ]}
                        hasFeedback
                    >
                        <Input 
                            placeholder='Enter a blog post title.' 
                            value={blogData?.blog.title}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item label="Description" name='description'
                        rules={[
                            {
                                required: true,
                                message: "This field is required."
                            },
                            {whitespace: true},
                            {min:5}
                        ]}
                        hasFeedback
                    >
                        <TextArea  
                            placeholder='Blog description goes here' 
                            rows="8"
                            value={blogData?.blog.description}
                            onChange={(e) => setEditDescription(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item label="Feature" name='feature'
                        rules={[
                            {
                                message: "This field is required."
                            },
                            {whitespace: true},
                            {min:5},
                            {max:50}
                        ]}
                        hasFeedback
                    >
                        <Input 
                            placeholder='This is a feature'
                            value={blogData?.blog.title}
                            onChange={(e) => setEditFeature(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item label="Tag" name='tag'
                        rules={[
                            {
                                message: "This field is required."
                            },
                            {whitespace: true},
                            {min:5},
                            {max:50}
                        ]}
                        hasFeedback
                    >
                        <Input 
                            placeholder='This is a tag' 
                            value={blogData?.blog.tags}
                            onChange={(e) => setEditTag(e.target.value)}
                        />
                    </Form.Item>
                    
                    <Form.Item className="flex justify-evenly">
                        <Button 
                            type="submit" 
                            style={{border: 0, background:'#1677ff', color: '#fff', float: 'right '}}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Form.Item>

                </Form>
          </>
        }
    </>
  )
}
