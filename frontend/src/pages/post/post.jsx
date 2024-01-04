import React, { useEffect } from 'react';
import axios from 'axios'
import {baseUrl} from '../../constants'

export default function PostComponent() {
  useEffect(() => {
    axios.get(`${baseUrl}/blog`)
    .then((res) => {
      console.log(res.data[0].blog.title)
    })
  }, [])

  return (
    <div>post</div>
  )
}
