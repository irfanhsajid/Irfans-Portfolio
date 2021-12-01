import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Banner.css';
import img from '../../Images/sajid_blackwhite.png'
import myResume from '../../Files/Irfanul_Haque_Sajid_RESUME.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Banner = () => {

    return (
        <div div className="py-5">
            <div className="container banner-container ">
                <div className="left">
                    <div className="banner-text">

                        <div className="py-2">
                            <h4>Hi, I'm</h4>
                            <h1 className="my-name">
                                <span className="text-danger" data-aos="fade-down-right" >Irfanul Haque Sajid</span>  </h1>
                            <h2 className="typed-text">
                                <TypeWriterEffect
                                    textStyle={{
                                        fontFamily: 'Red Hat Display',
                                        color: 'rgba(240, 248, 255, 0.658)',
                                        fontWeight: 500,
                                        fontSize: '1.4em',

                                    }}
                                    startDelay={2000}
                                    cursorColor="rgba(240, 248, 255, 0.658)"
                                    multiText={[
                                        'A Frontend Developer',
                                        'A Junior React Developer ',
                                        'A MERN Stack Developer',

                                    ]}
                                    multiTextDelay={2500}
                                    typeSpeed={85}
                                    multiTextLoop='true'
                                />

                            </h2>

                            <p>" I love what I do and I do what my clients love. Wish to work with all awesome clients around the world to create thoughtful and purposeful websites. " <br /> <i>--irfan h sajid</i>
                            </p>
                        </div>
                        <a href=" https://github.com/irfanhsajid" target="_blank">
                            <button className="btn-outline-danger  px-4 py-1 rounded-2 me-1" > <i className="fab fa-github me-1"></i> GitHub</button>
                        </a>
                        <a href=" https://www.linkedin.com/in/irfanhsajid/" target="_blank">
                            <button className="btn-outline-danger ms-1  px-4 py-1 rounded-2"> <i className="fab fa-linkedin me-1"></i> Linked In</button>
                        </a>
                        <a href={myResume} download="Irfanul_Haque_Sajid_RESUME.pdf" > <button className="btn-outline-danger ms-2  px-4 py-1 rounded-2 mt-2"><i className="fas fa-download me-1"></i> Resume</button></a>
                    </div>
                </div>
                <div className="right" data-aos="fade-up-left" data-aos-duration="1000" >
                    <img src={img} alt="" className="img-fluid banner-img" />
                </div>
            </div>
        </div>
    );
};

export default Banner;