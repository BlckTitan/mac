import React from 'react'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className='relative w-full h-screen'>
      <Nav/>

      <main className="absolute w-full h-full pt-24 flex flex-col items-center">
        <div className="w-full xl:w-4/6">
          <h2>home</h2>
        </div>

      </main>
      
    </div>
  )
}
