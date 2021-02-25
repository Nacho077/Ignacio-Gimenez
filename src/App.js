import React from 'react'
import s from './app.module.css'


//components
import NavBar from './components/NavBar'
import Presentation from './components/presentation'
import Skills from './components/skills'
import Projects from './components/projects'

//app
const App = () => (<div className={s.container_app}>
    <div className={s.container_navBar}>
      <NavBar />
      <div className={`${s.line} ${s.line_nav}`}></div>
    </div>
    <div className={s.container_port}>
      <div id="about"><Presentation /></div>
      <div id="skills" className={s.separator}></div>
      <Skills />
      <div className={s.line}></div>
      <div id="projects" className={s.separator}></div>
      <Projects />
    </div>
  </div>
)


export default App;
