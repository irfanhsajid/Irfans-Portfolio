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
            <div className="contact-container py-3 mt-5">
                <div className="contact-left">
                    <div className="contact-text">
                        <h3>Dhaka, Bangladesh</h3>
                        <b>Phone: +88012455888</b>
                        <p>
                            <address>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet possimus accusantium neque, laboriosam perferendis tenetur ratione ipsum tempore ab ea sequi nisi eius distinctio dicta. Omnis dolor dolore adipisci eos.
                            </address>
                        </p>
                    </div>
                </div>
                <div className="form-container contact-right ">
                    <form onSubmit={handleSubmit} className="w-100 form">
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
                        <button className="w-100 btn-outline-danger border-0 ms-2 p-2 rounded-2" type="submit" disabled={state.submitting}>
                            SUBMIT
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
