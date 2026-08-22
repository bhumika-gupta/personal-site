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
                <SkillList src={checkMarkIcon} skill="Python" />
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="SQL" />
                <SkillList src={checkMarkIcon} skill="C" />
                <SkillList src={checkMarkIcon} skill="Scala" />
                <SkillList src={checkMarkIcon} skill="Elm" />
                <SkillList src={checkMarkIcon} skill="HTML/CSS" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="Next.js" />
                <SkillList src={checkMarkIcon} skill="Node.js" />
                <SkillList src={checkMarkIcon} skill="Flask" />
                <SkillList src={checkMarkIcon} skill="Pandas" />
                <SkillList src={checkMarkIcon} skill="Matplotlib" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="Databricks" />
                <SkillList src={checkMarkIcon} skill="SQL Server" />
                <SkillList src={checkMarkIcon} skill="Toad" />
                <SkillList src={checkMarkIcon} skill="Azure" />
                <SkillList src={checkMarkIcon} skill="Db2" />
                <SkillList src={checkMarkIcon} skill="DBeaver" />
                <SkillList src={checkMarkIcon} skill="Excel VBA" />
                <SkillList src={checkMarkIcon} skill="Figma" />
            </div>
        </section>
    )
}

export default Skills