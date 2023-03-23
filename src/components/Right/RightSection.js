import React from 'react'
import ContactCard from './ContactCard'
import Friends from './friends'
import "./rightSection.css"


function RightSection() {
  return (
    <section className='right-section'>
      <ContactCard />
      <Friends/>
    </section>
  )
}

export default RightSection