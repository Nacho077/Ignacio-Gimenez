import React from 'react'
import s from './app.module.css'


//components
import NavBar from './components/NavBar'
import Presentation from './components/presentation'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'

const App = () => {
  const sections = [{
      name:"about",
      component: <Presentation />
    },
    {
      name:"skills",
      component: <Skills />
    },
    {
      name:"projects",
      component: <Projects />
    },
    {
      name:"contact",
      component: <Contact />
    }
  ]

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
            {section.component}
          </section>
        ))}
        <div className={s.separator}></div>
      </div>
    </div>)
}


export default App;
