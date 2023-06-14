import React from 'react'
import Title from '../layouts/Title'
import ResumeCard from './ResumeCard'
import Education from './Education'

function Resume({title,des}) {
  return (
    <section id="resume" className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title
          title="7+ YEARS OF EXPERIENCE"
          des="My Resume"
        />
      </div>
      
      <div>
        <ul className='w-full grid grid-cols-4'>
          <li className='resumeLi'>Education</li>
          <li className='resumeLi'>Professional Skills</li>
          <li className='resumeLi'>Experience</li>
          <li className='resumeLi'>Achivements</li>
        </ul>
      </div>

      <Education/>
      

      
      
      
    </section>
  )
}

export default Resume