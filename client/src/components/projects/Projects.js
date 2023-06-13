import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title 
                title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                des="My Projects"
            />
        </div>
        <div className='grid grid-cols-3 gap-14'>
            <ProjectCard
                title="SOCIAL MEDIA CLONE" 
                des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
                src={projectThree}
            />
            <ProjectCard
                title="E-Commerce Website" 
                des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
                src={projectOne}
            />
            <ProjectCard
                title="Chatting App" 
                des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
                src={projectTwo}
            />
            <ProjectCard
                title="SOCIAL MEDIA CLONE" 
                des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
                src={projectThree}
            />
            <ProjectCard
                title="E-Commerce Website" 
                des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
                src={projectOne}
            />
            <ProjectCard
                title="Chatting App" 
                des="Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad" 
                src={projectTwo}
            />

        </div>
    </section>
  )
}

export default Projects