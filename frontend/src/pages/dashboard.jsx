import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Dashboard() {

  const navigate = useNavigate()

  useEffect(() => {
    const LOGGED_IN = JSON.parse(localStorage.getItem('author'))

    if(!LOGGED_IN) return navigate('/login')
  }, [])
  
  return (
    
    <div>
      dashboard
    </div>
  )
}
