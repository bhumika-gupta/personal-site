import styles from './SkillsStyles.module.css'
import SkillList from '../../common/SkillList'

import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import { useTheme } from '../../common/Theme.Context'

function Skills() {

    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="Elm" />
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="C" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="Node.js" />
                <SkillList src={checkMarkIcon} skill="Next.js" />
                <SkillList src={checkMarkIcon} skill="Flask" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="Figma" />
                <SkillList src={checkMarkIcon} skill="VS Code" />
                <SkillList src={checkMarkIcon} skill="PyCharm" />
                <SkillList src={checkMarkIcon} skill="Eclipse" />
            </div>
        </section>
    )
}

export default Skills