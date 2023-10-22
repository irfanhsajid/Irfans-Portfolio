import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import swal from 'sweetalert';
import './contact.css';
function IrfansContactForm() {
    const [state, handleSubmit] = useForm("xzbopvgy");
    if (state.succeeded) {
        swal("Thank You", " For Your Response", "success");
        return window.location.reload();
    }
    return (
        <div className="container my-5 py-5">
            <h2 className="text-center">CONNECT ME</h2>
            <p className="borde1 border-danger border-bottom d-flex mx-auto w-25"></p>
            <div id="contact" className="contact-container py-3 ">
                <div className="contact-left">
                    <div className="contact-text" data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="text-white">About Me</h2>

                        <p className="about-text">
                            I'm Irfan, a full-stack web developer, who loves to create beautiful responsive websites with the most user-friendly experiences. I have the ability to write semantic, cross-browser compatible, and clean code that is completely re-useable, maintainable, and easy to understand. The main areas of my expertise are HTML, CSS, Bootstrap, and JavaScript (with React). I also have intermediate knowledge of Node.js, express.js & MongoDB. So, if you are looking for a developer for your company, I can be the solution you're looking for. I am very much enthusiastic to show how my experience and skills meet your needs. <br />
                            You can send email directly from here or contact with me via,

                        </p>
                        <p>
                            <a style={{ textDecoration: 'none', color: 'inherit' }} href=" https://www.facebook.com/irfanhsajid " target="_blank"><i className="fab fa-facebook-square me-1"> </i> Irfan H Sajid</a>
                        </p>
                        <p>
                            <i className="fab fa-whatsapp-square me-1"></i> +880-1324-392630
                        </p>
                        <p>
                            <i className="fas fa-envelope me-1"></i> irfanhsajid@gmail.com
                        </p>
                    </div>
                </div>
                <div className="form-container contact-right" data-aos="fade-left" data-aos-duration="1000">
                    <form onSubmit={handleSubmit} className="w-100 form">
                        <input
                            className="w-100 m-2 p-2"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                        />
                        <ValidationError
                            prefix="name"
                            field="text"
                            errors={state.errors}
                        /> <br />
                        <input
                            className="w-100 m-2 p-2"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        /> <br />
                        <textarea rows="5"
                            className="w-100 m-2 p-2"
                            id="message"
                            name="message"
                            placeholder="Message..."
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button className="w-100 btn-danger border-0  ms-2 p-2 rounded-2" type="submit" disabled={state.submitting}>
                            <i className="fas fa-paper-plane hvr-icon me-2"></i> SEND EMAIL
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
function Contact() {
    return (
        <IrfansContactForm />
    );
}
export default Contact;
