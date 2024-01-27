import React, { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useNavigate }  from "react-router-dom";

//constant variables
import { baseUrl } from '../constants';
import { Button, Form, Input } from 'antd';

export default function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    
    const navigate = useNavigate();

    const handleSubmit = () => {

        axios.post(`${baseUrl}/auth`, 
        {
            email, 
            password,

        }).then((res) => {

            // save the user to local stoprage
            localStorage.setItem('author', JSON.stringify(res.data))
            navigate('/dashboard')
        })
        .catch(function (err) {
            toast.error(err.response.data, {position: 'top-right', toastId: 3})
        });
    }

  return (
    <main className='w-full h-screen flex justify-center items-start bg-regal-blue'>
        <div className="w-full md:w-2/5 h-fit flex flex-col mt-16 xl:mt-48 p-4 xl:p-0 bg-white rounded-md">

            <header className='my-4 p-4'>
                <h2 className="text-regal-blue text-3xl font-bold">MAC</h2>
            </header>

            <Form 
                    autoComplete='off' 
                    labelCol={{span: 6,}} 
                    wrapperCol={{ span: 14, }} 
                    layout="horizontal" 
                    style={{maxWidth: 800}}
                    className="w-full p-4 md:p-24 flex flex-col rounded-md border border-solid"
                >
                
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
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    
                    <Form.Item className="flex justify-center">
                        <Button 
                            type="submit" 
                            style={{border: 0, background:'#1677ff', color: '#fff', float: 'right '}}
                            onClick={handleSubmit}
                        >
                            Login
                        </Button>
                    </Form.Item>

                </Form>
        </div>
    </main>
  )
}
