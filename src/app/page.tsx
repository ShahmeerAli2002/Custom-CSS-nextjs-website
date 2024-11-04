import React from 'react'
import HeroSection from './components/hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Team from './components/Team'

const page = () => {
  return (
    <div>
     <HeroSection/>
     <Services/>
     <Stats/>
     <Team/>
    </div>
  )
}

export default page
