import React, { useEffect, useState } from 'react';
import { ExclamationCircleFilled} from '@ant-design/icons';
import { Modal, Space, Table, Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

// constant variables
import {baseUrl} from '../../constants';
import Loading from '../../components/loading';

export default function Authors() {
  
  const [authorData, setAuthorData] = useState('')

  const { confirm } = Modal;

  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Are you sure to delete this author?',
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',

      onOk() {
        
        axios.delete(`${baseUrl}/author/${id}`)
        .then((res) => {
          getAllAuthors()
        })
        .catch((err) => {
          console.log(err)
        })
      }
    });
  };

  const getAllAuthors = () => {
    axios.get(`${baseUrl}/author`)
    .then((res) => {
      setAuthorData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text) => <Link to={`/author/author/${authorData._id}`}>{text}</Link>,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (_, record) => (
        <Space size="middle">
          {console.log(record._id)}
          <Link 
            to={`/author/editAuthor/${record._id}`}
            className='text-blue-600 font-semibold'
          >
            Edit
          </Link>
          <Button 
            className='bg-red-600 text-white font-semibold hover:text-white'
            onClick={() => showDeleteConfirm(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getAllAuthors()
    
  }, [setAuthorData])

  if(!authorData) return <Loading/>

  return (
    <>

      {
            (!authorData) ?

            <Loading/> :

            <>
              <header className='mb-8'>
                <h2 className='text-2xl font-semibold'>All Blog Authors</h2>
              </header>
                    
              
              <Table 
                columns={columns} 
                dataSource={authorData} 
                size="middle" 
                pagination
              />
            </>
        }
    </>
  )
}