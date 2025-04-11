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
    <div>
      <h1>About Us</h1>
      <Link href="/" className='text-blue-800 underline'>Home</Link>
    </div>
  )
}

export default About
