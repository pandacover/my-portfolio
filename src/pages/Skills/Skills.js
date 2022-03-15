import skillStyle from "../../styles/Skills.module.css"
import skillSet from "../../components/Skills/skillSet"


const Skills = () => {
    return (
        <main id="skillset" className={`${skillStyle.container} container`}>
            <p className={skillStyle.title}>
                <span>My Skillsets</span>
            </p>
            <ul className={`${skillStyle.skillset} flex`}>
                {skillSet.map(({ _id, name }) => (
                    <li className={skillStyle.skillset_item} key={_id}>
                        <span>{name}</span>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Skills