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
      Component: Presentation
    },
    {
      name: "skills",
      Component: Skills
    },
    {
      name:"experience",
      Component: Experience
    },
    {
      name: "projects",
      Component: Projects
    },
    {
      name: "contact",
      Component: Contact
    }
  ]

  const openModal = (modalData) => {
    setModalData(modalData)

    setModalOpen(true)
  }

  return (
    <>
      <NavBar routes={sections} />
      <main className={s.container_port}>
        {sections.map(({name, Component}) => <Component openModal={openModal} id={name} key={name}/>)}
      </main>
      {isModalOpen && 
        <div className={s.container_modal}>
          <Modal data={modalData} onClose={() => setModalOpen(false)}/>
        </div>
      }
    </>
  )
}


export default App;
