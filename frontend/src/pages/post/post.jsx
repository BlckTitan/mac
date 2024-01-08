import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

// constant variables
import {baseUrl} from '../../constants';
import Loading from '../../components/loading';

export default function PostComponent() {

  
  const [blogData, setBlogData] = useState('')
  const blogId = useParams()
  const id = blogId?.id;

  useEffect(() => {

    axios.get(`${baseUrl}/blog/${id}`)
    .then((res) => {
      setBlogData(res.data)
      console.log(blogData)
    })
    .catch((err) => {
        console.log(err)
    })
  }, [setBlogData])
  
    if(!blogData) return  <Loading/>

  return (
    <>
      <header className='mb-8'>
        <h2 className='text-2xl font-semibold'>All Posts</h2>
        <Link>Edit</Link>
      </header>
    </>
  )
}
