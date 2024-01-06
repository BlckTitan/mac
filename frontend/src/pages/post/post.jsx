import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// constant variables
import {baseUrl} from '../../constants';

export default function PostComponent() {

  
  const [blogData, setBlogData] = useState('')

  useEffect(() => {

    axios.get(`${baseUrl}/blog/req.params.id`)
    .then((res) => {
      setBlogData(res.data)
    })
  }, [setBlogData])

  console.log(blogData)

  return (
    <>
      <header className='mb-8'>
        <h2 className='text-2xl font-semibold'>All Posts</h2>
        <Link>Edit</Link>
      </header>
    </>
  )
}
