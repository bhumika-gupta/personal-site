// import React from 'react'
import styles from './ProjectStyles.module.css'
import ProjectCard from '../../common/ProjectCard'

import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'

// can further reduce redundancy by mapping over array of project info

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={viberr} 
                link="https://www.linkedin.com/in/bhumika-gupta-0552/"
                h3="Blast From The Past" 
                p="Parkinson's disease detection Elm game" 
            />
            <ProjectCard 
                src={freshBurger} 
                link="https://github.com/bhumika-gupta/tic-tac-toe-react"
                h3="Tic Tac Toe" 
                p="React game" 
            />
            <ProjectCard 
                src={hipsster} 
                link="https://github.com/bhumika-gupta/gbatteries"
                h3="GBatteries Battery Tests" 
                p="Node.js web app project with battery test data" 
            />
            <ProjectCard 
                src={fitLift} 
                link="https://www.figma.com/proto/VPwazFDDf1OHCLXjXJbdMu/LEAP-Pathfinder-3-Design%3A-FocusBuds?page-id=0%3A1&node-id=96-2555&viewport=2103%2C-386%2C0.13&t=NGULGlUtsey1ZKaU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=96%3A2555&show-proto-sidebar=1"
                h3="FocusBuds" 
                p="Social productivity app Figma prototype" 
            />
        </div>
    </section>
    
  )
}

export default Projects