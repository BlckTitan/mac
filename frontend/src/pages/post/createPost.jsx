import React from 'react'
import { useForm } from 'react-hook-form';
import { Button, Form, Input,  } from 'antd';
const { TextArea } = Input;

export default function CreatePost() {
  

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
            <Form onSubmit={handleSubmit(onSubmit)} labelCol={{span: 4,}} wrapperCol={{ span: 14, }} layout="horizontal" style={{maxWidth: 800,}}>
              
                <Form.Item label="Title">
                    <Input 
                    placeholder='necessitatibus, esse aperiam velit nesciunt, hic dignissimos deserunt.' 
                    {...register("title", {required: true})} 
                    />
                    {errors.title && <span>This field is required</span>}
                </Form.Item>

                <Form.Item label="Description">
                    <TextArea  
                        {...register("description", { required: true })}
                    />
                    {errors.description && <span>This field is required</span>}
                </Form.Item>

                <Form.Item label="Feature">
                    <Input {...register("feature", { required: true })} />
                    {errors.feature && <span>This field is required</span>}
                </Form.Item>

                <Form.Item label="Tags">
                    <Input {...register("tag", { required: true })} />
                    {errors.tag && <span>This field is required</span>}
                </Form.Item>
                
                <Form.Item>
                    <Button type="submit" style={{border: 0, background:'#1677ff', color: '#fff', float: 'right '}}>submit</Button>
                </Form.Item>

            </Form>
        </>
    )
}
