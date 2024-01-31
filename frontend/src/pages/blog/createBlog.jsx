import React, { useEffect, useState } from 'react';
import  { useNavigate }  from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, Input,  } from 'antd';
import axios from 'axios'
import { baseUrl } from '../../constants';
import { loggedIn } from '../../utils/func'
import LayoutComponent from '../../components/layoutComponent';
const { TextArea } = Input;


const LOGGED_IN = loggedIn()

export default function CreateBlogPost() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [feature, setFeature] = useState('')
    const [tag, setTag] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        if(!LOGGED_IN) return navigate('/login')
    
    }, [])
    

    const handleSubmit = () => {

        axios.post(`${baseUrl}/blog`, {
            headers: {
              'x-auth-token': `${LOGGED_IN[2]}`
            }
        }, 
        {
            title: title, 
            description: description, 
            feature: feature, 
            tags: tag

        }).then((res) => {
            
            navigate('/blogs')
        })
        .catch(function (err) {
            toast.error(err.response.data, {position: 'top-right', toastId: 6})
        });
    }

  return (
        <LayoutComponent>
            <header className='mb-8'>
                <h2 className='text-2xl font-semibold'>Create Blog Post</h2>
            </header>
            
            <Form 
                autoComplete='off' 
                labelCol={{span: 4,}} 
                wrapperCol={{ span: 14, }} 
                layout="horizontal" 
                style={{maxWidth: 800,}}
                initialValues={{ remember: true }}
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
                        value={title}
                        placeholder='Enter a blog post title.' 
                        onChange={(e) => setTitle(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        value={feature}
                        onChange={(e) => setFeature(e.target.value)}
                    />
                </Form.Item>

                <Form.Item label="Tag" name='Tag'
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
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
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
        </LayoutComponent>
    )
}
