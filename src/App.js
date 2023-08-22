import React, { useState } from 'react'
import s from './app.module.css'


//components
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
    <div className={s.container_app}>
      <div className={s.container_navBar}>
        <NavBar />
        <div className={`${s.line} ${s.line_nav}`}></div>
      </div>
      <div className={s.container_port}>
        {sections.map(section => (
          <section key={section.name}>
            <div id={section.name} className={s.separator}></div>
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
    </div>)
}


export default App;
