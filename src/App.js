import React, { useState } from 'react'
import s from './app.module.css'

// Components
import NavBar from './components/NavBar'
import Presentation from './components/presentation'
import Skills from './components/skills'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'
import Modal from './components/modal'

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  const sections = [{
      name: "about",
      component: Presentation
    },
    {
      name: "skills",
      component: Skills
    },
    {
      name:"experience",
      component: Experience
    },
    {
      name: "projects",
      component: Projects
    },
    {
      name: "contact",
      component: Contact
    }
  ]

  const openModal = (modalData) => {
    setModalData(modalData)

    setModalOpen(true)
  }

  return (
    <>
      <NavBar />
      <div className={s.container_port}>
        {sections.map(section => (
          <section key={section.name} id={section.name}>
            <div className={s.separator}></div>
            {<section.component openModal={openModal} />}
          </section>
        ))}
        <div className={s.separator}></div>
      </div>
      {isModalOpen && 
        <div className={s.container_modal}>
          <Modal data={modalData} onClose={() => setModalOpen(false)}/>
        </div>
      }
    </>
  )
}


export default App;
