import navStyles from "../../styles/Nav.module.css"
import navItems from "./navItems"
import { FaHamburger } from "react-icons/fa"
import { useState } from 'react'

const Navbar = ({ payload }) => {
    const { theme, dispatchTheme } = payload
    const [toggleMenu, setToggleMenu] = useState(false)

    const changeTheme = (e) => {
        try {
            e.preventDefault()
            const bodyDOM = document.querySelector("body")

            if (theme === "dark") {
                dispatchTheme("light")
                bodyDOM?.classList.add("light")
            } else {
                dispatchTheme("dark")
                bodyDOM?.classList.remove("light")
            }
        } catch (error) {
            console.error(error)
        }
    }

    const toggleMobileMenu = e => {
        try {
            e.preventDefault()
            setToggleMenu(!toggleMenu)
            if (!toggleMenu && window.innerWidth <= 820) {
                document.querySelector("body")?.classList.add("disable-scroll")
            } else {
                document.querySelector("body")?.classList.remove("disable-scroll")
            }
        } catch (error) {
            console.error(error)
        }
    }

    const toggleMobileMenuLink = (e) => {
        try {
            e.preventDefault()
            const scrollSelector = e.target.classList[0].substr(1)
            if (scrollSelector !== "") {
                document.getElementById(scrollSelector).scrollIntoView()
                toggleMobileMenu(e)
            } else {
                window.location.assign("https://www.google.com")
            }

        } catch (error) {
            console.error(error)
        }
    }


    window.addEventListener('resize', () => {
        try {
            if (window.innerWidth > 820) {
                document.querySelector("body")?.classList.remove("disable-scroll")
                setToggleMenu(false)
            }
        } catch (error) {
            console.error(error)
        }
    })


    return (
        <header className={`${navStyles.header} container ${navStyles[theme]}`}>
            <nav className={`${navStyles.navbar} container flex`}>
                <div className={`${navStyles.title_container} flex`}>
                    <a href="#about" onClick={toggleMobileMenuLink}>
                        <span className={`#about ${navStyles.title}`}>
                            LuvMakin
                        </span>
                    </a>
                </div>
                <ul className={`${navStyles.nav} flex ${navStyles[toggleMenu]}`}>
                    {navItems.map(({ _id, name, link }) => (
                        <li className={navStyles.nav_items} key={_id}>
                            <a href={link} onClick={toggleMobileMenuLink}>
                                <span className={link}>{name}</span>
                            </a>
                        </li>
                    ))}
                    <li className={navStyles.nav_items}>
                        <a href="https://github.com/pandacover/my-portfolio/tree/source" target="_blank" rel="noreferrer noopener">
                            <span>Source</span>
                        </a>
                    </li>
                    <li className={navStyles.nav_items}>
                        <button onClick={changeTheme} className="btn">{theme}</button>
                    </li>
                </ul>
                <div className={`${navStyles.mobile_button}`}>
                    <button className="btn" onClick={toggleMobileMenu}>
                        <FaHamburger />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar