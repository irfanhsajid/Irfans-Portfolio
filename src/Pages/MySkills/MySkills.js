import React from 'react';
import './MySkills.css';
import html from './Skills Icon/icons8-html-5-48.png';
import css from './Skills Icon/icons8-css3-48.png';
import sass from './Skills Icon/icons8-sass-48.png';
import bootstrap from './Skills Icon/icons8-bootstrap-48.png';
import js from './Skills Icon/icons8-javascript-48.png';

import react from './Skills Icon/icons8-react-native-48.png'
import mui from './Skills Icon/icons8-material-ui-48.png'
import redux from './Skills Icon/icons8-redux-48.png'
import nodejs from './Skills Icon/icons8-nodejs-48.png'
import mongodb from './Skills Icon/icons8-mongodb-48.png'

const MySkills = () => {
    return (
        <div className="container" id="skills">
            <h2 className="text-center">MY SKILLS  </h2>

            <div className="row my-3">
                <div className="col-12 col-sm-6 my-3 p-3 " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="0" >
                    <div className="d-flex flex-wrap justify-content-between text-center skills-left">
                        <div>
                            <img src={html} alt="" />
                            <h6>Html</h6>
                        </div>
                        <div>
                            <img src={css} alt="" />
                            <h6>Css</h6>
                        </div>
                        <div>
                            <img src={sass} alt="" />
                            <h6>Scss</h6>
                        </div>
                        <div>
                            <img src={bootstrap} alt="" />
                            <h6>Bootstrap</h6>
                        </div>
                        <div>
                            <img src={js} alt="" />
                            <h6>JavaScript</h6>
                        </div>
                        <div className="border-danger border border-1 border-right"></div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 my-3 p-3" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0" >
                    <div className="d-flex flex-wrap justify-content-between text-center">
                        <div className="border-danger border border-1 border-left"></div>
                        <div>
                            <img src={react} alt="" />
                            <h6>React</h6>
                        </div>
                        <div>
                            <img src={nodejs} alt="" />
                            <h6>Node.js</h6>
                        </div>
                        <div>
                            <img src={mongodb} alt="" />
                            <h6>Mongodb</h6>
                        </div>
                        <div>
                            <img src={redux} alt="" />
                            <h6>Redux</h6>
                        </div>
                        <div>
                            <img src={mui} alt="" />
                            <h6>Material-Ui</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MySkills;