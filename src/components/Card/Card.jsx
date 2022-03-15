import cardStyles from "../../styles/Card.module.css"

const Card = ({ name, details, live, source, techs, theme }) => {
    return (
        <div className={`${cardStyles.card} flex ${cardStyles[theme]}`}>
            <p className={cardStyles.title}>
                <span>{name}</span>
            </p>
            <p className={cardStyles.details}>
                <span>{details}</span>
            </p>
            <ul className={`${cardStyles.techs} flex`}>
                {techs.map((icon, idx) => (
                    <li className={cardStyles.icons} key={idx}>
                        {icon}
                    </li>
                ))}
            </ul>
            <section className={cardStyles.links}>
                <a className={cardStyles.live_btn} href={live} target="_blank" rel="noreferrer noopener">
                    Live
                </a>
                <a href={source} target="_blank" rel="noreferrer noopener">
                    Github
                </a>
            </section>
        </div>
    )
}
export default Card