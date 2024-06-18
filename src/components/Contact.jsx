import { ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

function Contact() {
  return (
    <div>
      <ParallaxLayer offset={4} speed={0.27} >
        <div className='2xl:px-[40rem] xl:px-[30rem] px-32 py-32 mt-[33rem]'>
          <div className='mb-10'>
            <h1 className='text-6xl font-bold'>
              Contact
            </h1>
          </div>
          <div>
            <div className='mb-4'>
              <h1>Full Name</h1>
              <input type="text" className='bg-slate-800 rounded-lg w-full px-3 h-10 flex' placeholder='Full name'/>
            </div>
            <div className='mb-4'>
              <h1>Email Address</h1>
              <input type="text" className='bg-slate-800 rounded-lg w-full px-3 h-10 flex' placeholder='Email'/>
            </div>
            <div className='mb-4'>
              <h1>Message</h1>
              <textarea type="text" className='bg-slate-800 rounded-lg w-full p-3 h-56 flex' placeholder='Message'/>
            </div>
            <div>
              <button className='px-5 py-3 bg-gray-800 mt-2'>Send</button>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  )
}

export default Contact
