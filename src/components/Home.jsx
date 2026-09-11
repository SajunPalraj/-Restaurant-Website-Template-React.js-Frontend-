import React from 'react'
import HeroSection from './HeroSection'
import HeroSection2 from './HeroSection2'
import TabSection from './TabSection'
import HeroSection3 from './HeroSection3'
import BookingSection from './BookingSection'
import SliderSection from './SliderSection'
import Footer from './Footer'

export default function Home() {
    return (
        <>
            <HeroSection />
            <HeroSection2/>
            <TabSection/>
            <HeroSection3/>
            <BookingSection/>
            <SliderSection/>
            <Footer/>
        </>
    )
}