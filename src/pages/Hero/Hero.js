import heroStyles from "../../styles/Hero.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Resume from "../Resume/Resume.pdf"

const Hero = ({ theme }) => {

    return (
        <main id="about" className={`${heroStyles.container} ${heroStyles[theme]} container flex`}>
            <section className={`${heroStyles.content} flex`}>
                <p>
                    <span className={heroStyles.content_1}>Hello, I'm</span>
                </p>
                <p>
                    <span className={heroStyles.content_2}>Luv Makin</span>
                </p>
                <p>
                    <span className={heroStyles.content_3}>Creative Font-End Web Developer</span>
                </p>
                <p>
                    <span className={heroStyles.content_4}>
                        I'm currently pursuing my B.E. (Degree) in
                        Computer Science and Engineering from Chitkara University Punjab.
                        Being a geek for years I've been very interested in developments of website/webpages and
                        Computer Programming.
                    </span>
                </p>
                <div className={heroStyles.social}>
                    <a href="https://github.com/pandacover"
                        target="_blank"
                        rel="noreferrer noopener">
                        <span><FaGithub /></span>
                    </a>
                    <a href="https://www.linkedin.com/in/luv-makin-19a151209/"
                        target="_blank"
                        rel="noreferrer noopener">
                        <span><FaLinkedin /></span>
                    </a>
                    <a href={Resume}
                        target="_blank"
                        rel="noreferrer noopener">
                        <span>Resume</span>
                    </a>
                </div>
            </section>
            <section className={`${heroStyles.image} flex`}>
                <img src="https://imgur.com/WoyIDdJ.jpg" alt="It's me ?" />
            </section>
        </main>
    )
}

export default Hero