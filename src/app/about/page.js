import Link from 'next/link'
import React from 'react'
// import {Metadata} from "next"

export const metadata = {
  title: {
    absolute: "About Page"
  }
}
const About = () => {
  return (
    <div className='flex items-center justify-center h-lvh'>
      <h1 className='text-5xl font-bold '>About Us</h1>
    </div>
  )
}

export default About
