import React, { useEffect, useState } from 'react';
import  { useNavigate, useParams }  from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, Input, Select,  } from 'antd';
import axios from 'axios'
import { baseUrl } from '../../constants';
import LoadingComponent from '../../components/loading';
import { loggedIn } from '../../utils/func';
import LayoutComponent from '../../components/layoutComponent';
const { Option } = Select;

export default function EditAuthor() {

    const [editName, setEditName] = useState()
    const [editRole, setEditRole] = useState()
    const [editEmail, setEditEmail] = useState()
    const [editPhone, setEditPhone] = useState()
    const [editPassword, setEditPassword] = useState()
    const [authorData, setAuthorData] = useState('')

    const navigate = useNavigate();
    const authorId = useParams()

    
    const LOGGED_IN = loggedIn()

    const getAuthorById = () => {
        axios.get(`${baseUrl}/author/${authorId.id}`, {
            headers: {
              'x-auth-token': `${LOGGED_IN[2]}`
            }
        })
        .then((res) => {
            setAuthorData(res.data)
        })
        .catch((err) => {
            toast.error(err.response.data, {position: 'top-right', toastId: 4})
        })
    }

    useEffect(() => {
        
        // check for login
        if(!LOGGED_IN) return navigate('/login')
        // check for admin priviledge
        if(LOGGED_IN[1] !== 'administrator') return navigate('/dashboard')
        
        getAuthorById()
      
    }, [setAuthorData])
    

    const handleSubmit = () => {

        axios.put(`${baseUrl}/author/${authorId.id}`, {
            headers: {
              'x-auth-token': `${LOGGED_IN[2]}`
            }
        }, 
        {
            name: editName || authorData?.name, 
            role: editRole || authorData?.role, 
            email: editEmail || authorData?.email, 
            phone: editPhone || authorData?.phone,
            password: editPassword,
            isAdmin: (editRole === "administrator") ? true : false

        }).then((res) => {
            
            navigate('author/authors')
        })
        .catch(function (err) {
            toast.error(err.response.data, {position: 'top-right', toastId: 5})
        });
    }

    let initialValues = () => {
      if(authorData) return {
        name: authorData?.name,
        role: authorData?.role,
        email: authorData?.email,
        phone: authorData?.phone
      }
    }

    initialValues = initialValues()
    

  return (
      <LayoutComponent>

        {
            (!authorData) ?

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
              
                <Form.Item label="Name" name='name' 
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
                        value={editName}
                        placeholder="Enter a author's name." 
                        onChange={(e) => setEditName(e.target.value)}
                    />
                </Form.Item>

                <Form.Item label="Role" name='role'
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
                    <Select 
                        placeholder='Choose a role for this author'
                        onChange={(value) => setEditRole(value)}
                        rules={[
                            {
                                required: true,
                                message: "This field is required"
                            },
                        ]}
                    >
                        <Option value="administrator">
                            Administrator
                        </Option>
                        <Option value="publisher">
                            Publisher
                        </Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Email" name='email'
                    rules={[
                        {
                            required: true,
                            message: "This field is required."
                        },
                        {whitespace: true},
                        {min:5},
                        {max:50}
                    ]}
                    hasFeedback
                >
                    <Input 
                        placeholder="Enter author's email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                    />
                </Form.Item>

                <Form.Item label="Phone" name='phone'
                    rules={[
                        {
                            required: true,
                            message: "This field is required."
                        },
                        {whitespace: true},
                        {min:5},
                        {max:50}
                    ]}
                    hasFeedback
                >
                    <Input 
                        placeholder="Enter author's phone number" 
                        value={editPhone}
                        onChange={(e) => setEditPhone(e.target.value)}
                    />
                </Form.Item>

                <Form.Item label ="Password" name='password'
                    rules={[
                        {
                            required: true,
                            message: "This field is required."
                        },
                        {whitespace: true},
                        {min:8},
                        {max:50}
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        value={editPassword}
                        onChange={(e) => setEditPassword(e.target.value)}
                    />
                </Form.Item>
                
                <Form.Item className="flex justify-evenly">
                    <Button 
                        type="submit" 
                        style={{border: 0, background:'#1677ff', color: '#fff', float: 'right '}}
                        onClick={handleSubmit}
                    >
                        Add Author
                    </Button>
                </Form.Item>

            </Form>
          </>
        }
    </LayoutComponent>
  )
}
