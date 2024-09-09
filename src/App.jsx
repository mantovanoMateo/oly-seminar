import { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import './App.css'
import Hero from './components/hero/Hero'
import WhyUs from './components/why-us/why-us'
import Benefits from './components/benefits/benefits'
import NextDates from './components/next-dates/next-dates'
import HelpUs from './components/helpus/Help-us'
import Footer from './components/footer/footer'

function App() {

  return (
    <div className='bg'>
      <NavBar />
      <main>
        <Hero />
        <br />
        <br />
        <br />
        <WhyUs />
        <Benefits />
        <NextDates />
        <HelpUs />
      </main>
      <Footer />
      <br />
      <br />
    </div>
  )
}

export default App
