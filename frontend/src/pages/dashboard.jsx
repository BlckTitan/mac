import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loggedIn } from '../utils/func';
import LayoutComponent from '../components/layoutComponent';



export default function Dashboard() {

  const navigate = useNavigate()

  useEffect(() => {
    const LOGGED_IN = loggedIn()

    if(!LOGGED_IN) return navigate('/login')
  }, [])
  
  return (
    
    <LayoutComponent>
      dashboard
    </LayoutComponent>
  )
}
