import { Form, Hero, Projects, Skills } from "../../pages";

const Layout = ({ theme }) => {
    return (
        <>
            <Hero theme={theme} />
            <Skills />
            <Projects theme={theme} />
            <Form theme={theme} />
        </>
    )
}

export default Layout