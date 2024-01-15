import React, { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useNavigate }  from "react-router-dom";

//constant variables
import { baseUrl } from '../../constants';

import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;


export default function CreateAuthor() {

    const [name, setName] = useState()
    const [role, setRole] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate();

    const handleSubmit = () => {

        axios.post(`${baseUrl}/author`, 
        {
            name: name, 
            role: role, 
            email: email, 
            phone: phone,
            password: password, 
            isAdmin: (role === 'administrator') ? true : false

        }).then((res) => {
            
            navigate('/author/authors')
        })
        .catch(function (err) {
            toast.error(err.response.data, {position: 'top-right', toastId: 3})
        });
    }

  return (
    <>
            <header className='mb-8'>
                <h2 className='text-2xl font-semibold'>Create Blog Author</h2>
            </header>
            
            <Form 
                autoComplete='off' 
                labelCol={{span: 4,}} 
                wrapperCol={{ span: 14, }} 
                layout="horizontal" 
                style={{maxWidth: 800,}}
                initialValues={{ remember: true }}
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
                        value={name}
                        placeholder="Enter a author's name." 
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(value) => setRole(value)}
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
                        <Option value="publisher" default>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
  )
}
