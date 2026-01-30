import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Loyout = () => {
  return (
    <>
    <Header/>
    <main className='pt-20'>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Loyout