import React from 'react'

// Components
import Navbar from '../Components/Navbar/Navbar'
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel'

const DefaultLayout = (props) => {
    return (
        <>
        <Navbar />
        <HeroCarousel />
        {props.children}
        </>
    )
}

export default DefaultLayout

