import React from 'react'
import LeftBanner from './LeftBanner'
// import {useTypewriter,Cursor} from "react-simple-typewriter"
// import {FaFacebookF, FaTwitter, FaLinkedinIn, FaReact} from "react-icons/fa"
// import {SiTailwindcss, SiFigma, SiNextdotjs} from "react-icons/si"
import RightBanner from './RightBanner'

function Banner() {




  return (
    <section id="home" className='w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black '>
      <LeftBanner/>
      <RightBanner/>

    </section>
  )
}

export default Banner