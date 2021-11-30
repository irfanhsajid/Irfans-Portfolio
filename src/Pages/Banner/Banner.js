import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Banner.css';
import img from '../../Images/sajid_blackwhite.png'
import myResume from '../../Files/Irfanul_Haque_Sajid_RESUME.pdf';
const Banner = () => {
    return (
        <div div className="py-5">
            <div className="container banner-container ">
                <div className="left">
                    <div className="banner-text">

                        <div className="py-2">
                            <h4>Hi, I'm</h4>
                            <h1 className="my-name">
                                <span className="text-danger">Irfanul Haque Sajid</span>  </h1>
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
                                        'A Frontend Developer </>',
                                        'A Junior React Developer </>',
                                        'A MERN Stack Developer </>',

                                    ]}
                                    multiTextDelay={2500}
                                    typeSpeed={85}
                                    multiTextLoop='true'
                                />

                            </h2>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut dolor cumque veritatis fugiat sed magnam quasi, repudiandae enim totam!</p>
                        </div>
                        <a href=" https://github.com/irfanhsajid" target="_blank">
                            <button className="btn-danger border-0 px-4 py-1 rounded-2 me-2" >GitHub</button>
                        </a>
                        <a href=" https://www.linkedin.com/in/irfanhsajid/" target="_blank">
                            <button className="btn-danger ms-1 border-0 px-4 py-1 rounded-2">LinkedIn</button>
                        </a>
                        <a href={myResume} download="Irfanul_Haque_Sajid_RESUME.pdf" > <button className="btn-danger ms-2 border-0 px-4 py-1 rounded-2 mt-2">RESUME</button></a>
                    </div>
                </div>
                <div className="right">
                    <img src={img} alt="" className="img-fluid banner-img" />
                </div>
            </div>
        </div>
    );
};

export default Banner;