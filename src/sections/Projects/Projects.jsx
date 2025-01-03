// import React from 'react'
import styles from './ProjectStyles.module.css'
import ProjectCard from '../../common/ProjectCard'

import blastfrompast from '../../assets/blast-from-the-past.png'
import tictactoe from '../../assets/tic-tac-toe.png'
import gbatteries from '../../assets/gbatteries-logo.png'
import focusbuds from '../../assets/focusbuds.png'

// can further reduce redundancy by mapping over array of project info

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={blastfrompast}
                link="https://www.linkedin.com/in/bhumika-gupta-0552/"
                h3="Blast From The Past" 
                p="Parkinson's disease detection Elm game" 
            />
            <ProjectCard 
                src={tictactoe} 
                link="https://github.com/bhumika-gupta/tic-tac-toe-react"
                h3="Tic Tac Toe" 
                p="React game" 
            />
            <ProjectCard 
                src={gbatteries} 
                link="https://github.com/bhumika-gupta/gbatteries"
                h3="GBatteries Battery Tests" 
                p="Node.js web app with battery data" 
            />
            <ProjectCard 
                src={focusbuds} 
                link="https://www.figma.com/proto/VPwazFDDf1OHCLXjXJbdMu/LEAP-Pathfinder-3-Design%3A-FocusBuds?page-id=0%3A1&node-id=96-2555&viewport=2103%2C-386%2C0.13&t=NGULGlUtsey1ZKaU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=96%3A2555&show-proto-sidebar=1"
                h3="FocusBuds" 
                p="Social productivity Figma app" 
            />
        </div>
    </section>
    
  )
}

export default Projects