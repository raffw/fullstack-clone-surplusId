import React from 'react'
import NavBar from '../Components/Fragments/Dashboard/NavBar'
import Hero from '../Components/Fragments/Dashboard/Carousel'
import CategoryMenu from '../Components/Fragments/Dashboard/Category'
import Profile from '../Components/Fragments/Dashboard/Profile'
import Menu from '../Components/Fragments/Dashboard/Menu'
import Footer from '../Components/Fragments/Dashboard/Footer'
import Recycle from '../Components/Fragments/Dashboard/Recycle'


const Dashboard = () => {
  return (
    <>
        <NavBar />
        <Hero/>
        <Profile/>
        <CategoryMenu/>
        <Menu/>
        <Recycle/>
        <Footer/>
    </>
  )
}

export default Dashboard