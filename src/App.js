import React from 'react'
import s from './app.module.css'


//components
import NavBar from './components/NavBar'
import Presentation from './components/presentation'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'

//app
const App = () => (
  <div className={s.container_app}>
    <div className={s.container_navBar}>
      <NavBar />
      <div className={`${s.line} ${s.line_nav}`}></div>
    </div>
    <div className={s.container_port}>
      <div id="about" className={s.separator}></div>
      <div><Presentation /></div>
      <div id="skills" className={s.separator}></div>
      <Skills />
      <div className={s.line}></div>
      <div id="projects" className={s.separator}></div>
      <Projects />
      <div className={s.line}></div>
      <div id="contact" className={s.separator}></div>
      <Contact />
      <div className={s.separator}></div>
      <div className={s.separator}></div>
    </div>
  </div>
)


export default App;
