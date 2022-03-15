import formStyles from "../../styles/Form.module.css"
import { FaTelegramPlane } from "react-icons/fa"
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import ids from "../../components/Emailjs/emailJs";

const Form = ({ theme }) => {
    const form = useRef()

    const sendEmail = (e) => {
        try {
            e.preventDefault()
            emailjs.sendForm(ids.serviceID, ids.templateID, form.current, ids.keyID)
                .then((res) => {
                    console.log(res.text)
                }, (error) => {
                    console.error(error)
                })

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main id="contact" className={`${formStyles.formContainer} container ${formStyles[theme]}`}>
            <p className={formStyles.title}>
                <span>Get In Touch</span>
            </p>
            <div className={`${formStyles.form_wrapper} flex`}>
                <section className="flex">
                    <p className={formStyles.description}>
                        <span>Thank you</span>
                        <br />
                        <span>Do you have any Queries?</span>
                    </p>
                </section>
                <form action="mailto:luvmakin01@gmail.com"
                    className={formStyles.form_container}
                    method="post"
                    encType="text/plain"
                    ref={form}
                >
                    <section className="flex">
                        <p className="flex">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="johndoe@gmail.com"
                            />
                        </p>
                        <p className="flex">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="John Doe"
                            />
                        </p>
                    </section>
                    <br />
                    <section>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Typing..."></textarea>
                    </section>
                    <button className={`${formStyles.button} btn`} type="submit" onClick={sendEmail}>
                        <FaTelegramPlane />&nbsp;
                        <span>Send</span>
                    </button>
                </form>
            </div>
        </main>
    )
}

export default Form