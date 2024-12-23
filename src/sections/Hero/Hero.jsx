import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/Theme.Context'


function Hero() {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === 'light' ? sun : moon
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark
    const githubIcon = theme === 'light' ? githubLight : githubDark
    



    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.hero} 
                    src={heroImg} 
                    alt="Profile picture of Bhumika Gupta" 
                />
                <img 
                    className={styles.colorMode}
                    src={themeIcon} 
                    alt="Colour mode icon" 
                    onClick={toggleTheme}
                />

            </div>
            <div className={styles.info}>
                <h1>
                    Bhumika 
                    <br />
                    Gupta
                </h1>
                <h2>Developer</h2>
                <span>
                    <a href="https://www.linkedin.com/in/bhumika-gupta-0552/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                    <a href="https://github.com/bhumika-gupta" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                </span>
                <p className={styles.description}>A second year undergraduate Computer Science student at McMaster University. Seeking learning experiences and opportunities to aid in both personal and professional development. Especially interested in opportunities in coding and design!</p>
                <a href={CV} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>

        </section>
    )
}

export default Hero