import { Card } from "../../components";
import projStyles from "../../styles/Projects.module.css"
import cardItems from "../../components/Card/cardItems";

const Projects = ({ theme }) => {
    return (
        <main id="projects" className={`${projStyles.container} container`}>
            <p className={projStyles.title}>
                <span>My Projects</span>
            </p>
            <section className={`${projStyles.card_container} flex`}>
                {cardItems.map(({ _id, title, techs, live, source, details }) => (
                    <Card
                        key={_id}
                        name={title}
                        details={details}
                        live={live}
                        source={source}
                        techs={techs}
                        theme={theme}
                    />
                ))}
            </section>
        </main>
    )
}


export default Projects