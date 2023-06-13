import React from 'react'
import { AiFillAppstore } from "react-icons/ai"
import { FaMobile,FaGlobe, FaBars } from "react-icons/fa"
import { SiProgress, SiAntdesign } from "react-icons/si"
import Title from "../layouts/Title"
import Card from "./Card"


function Features() {
  return (
    <section id="features" className='w-full h-[1000px] py-20 border-b-[1px] border-b-black '>
      <Title title="Features" des="What I Do" />

      <div className='grid grid-cols-3 gap-20'>
        <Card 
          title="Business Strategy" 
          des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
          icon={<FaBars/>}
        />
        <Card 
          title="App Development" des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
          icon={<AiFillAppstore/>}
        />
        <Card 
          title="SEO Optimization" 
          des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
          icon={<SiProgress/>}
        />
        <Card 
          title="Mobile Development" 
          des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
          icon={<FaMobile/>}
        />
        <Card 
          title="UX Design" 
          des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
          icon={<SiAntdesign/>}
        />
        <Card 
          title="Hosting Websites" 
          des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
          icon={<FaGlobe/>}
        />



      </div>
    </section>
  )
}

export default Features