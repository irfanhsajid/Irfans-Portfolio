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
            <h2 className="text-center my-3">Contact With Me</h2>
            <p className="borde1 border-danger border-bottom d-flex mx-auto w-50"></p>
            <div id="contact" className="contact-container py-3 mt-5">
                <div className="contact-left">
                    <div className="contact-text" data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="text-white">About Me</h2>

                        <p className="about-text">
                            I'm Irfanul Haque Sajid, a front-end web developer, loves to create attractive websites with user-friendly experiences. I'm experienced in developing websites which are fully responsive to all kind of devices. I have the ability to write semantic, cross-browser compatible, clean code by hand that is re-useable, maintainable, and easy to understand. The main areas of my expertise are HTML, CSS, Bootstrap, JavaScript (with React). I also have intermediate knowledge of Node.js, express.js & MongoDB. So if you are looking for a front-end developer for your company, I can be the solution you're looking for. I am very much enthusiastic to show how my experience and skills meet your needs. <br />
                            You can send email directly from here or contact with me via,

                        </p>
                        <p>
                            <i className="fab fa-facebook-square"> </i> Irfan H Sajid
                        </p>
                        <p>
                            <i className="fab fa-whatsapp-square"></i> +880-172-7714930
                        </p>
                        <p>
                            <i className="fas fa-envelope"></i> irfanhsajid@gmail.com
                        </p>
                    </div>
                </div>
                <div className="form-container contact-right ">
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
                            <i className="fab fa-telegram-plane"></i> SEND EMAIL
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
