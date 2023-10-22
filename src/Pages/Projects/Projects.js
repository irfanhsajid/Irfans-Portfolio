import React from 'react';
import './projects.css';
import { Carousel } from 'react-bootstrap';

import qutirMahal from '../../Images/Projects SS/Qutir-Mahal/qutir-mahal.png';
import qutirMahal1 from '../../Images/Projects SS/Qutir-Mahal/qutir-mahal1.png';
import qutirMahal2 from '../../Images/Projects SS/Qutir-Mahal/qutir-mahal2.png';
import qutirMahal3 from '../../Images/Projects SS/Qutir-Mahal/qutir-mahal3.png';


import tourMania from '../../Images/Projects SS/TourMania/tourMania.png';
import tourMania1 from '../../Images/Projects SS/TourMania/tourMania1.png';
import tourMania2 from '../../Images/Projects SS/TourMania/tourMania2.png';
import tourMania3 from '../../Images/Projects SS/TourMania/tourMania3.png';


import medSphere1 from '../../Images/Projects SS/MedSphere/medsphere1.png';
import medSphere2 from '../../Images/Projects SS/MedSphere/medsphere2.png';


import macbook1 from '../../Images/Projects SS/MackBook/mackbook-pro1.png'
import macbook2 from '../../Images/Projects SS/MackBook/mackbook-pro2.png'


import hondaCbr1 from '../../Images/Projects SS/Honda-CBR/honda-cbr1.png'
import hondaCbr2 from '../../Images/Projects SS/Honda-CBR/honda-cbr2.png'
import hondaCbr3 from '../../Images/Projects SS/Honda-CBR/honda-cbr3.png'

import foodZone1 from '../../Images/Projects SS/Food Zone/food-zone1.png'
import foodZone2 from '../../Images/Projects SS/Food Zone/food-zone2.png'
import foodZone3 from '../../Images/Projects SS/Food Zone/food-zone3.png'

//technology images
import html from '../MySkills/Skills Icon/icons8-html-5-48.png';
import css from '../MySkills/Skills Icon/icons8-css3-48.png';
import bootstrap from '../MySkills/Skills Icon/icons8-bootstrap-48.png';
import js from '../MySkills/Skills Icon/icons8-javascript-48.png';
import firebase from '../MySkills/Skills Icon/icons8-firebase-48.png'
import react from '../MySkills/Skills Icon/icons8-react-native-48.png'
import nodejs from '../MySkills/Skills Icon/icons8-nodejs-48.png'
import mongodb from '../MySkills/Skills Icon/icons8-mongodb-48.png'


const Projects = () => {
    return (
        <div className="container mt-5 ">
            <h2 className="text-center mt-3">LATEST PROJECTS</h2>
            <div id="projects" className="projects-container mt-5 row text-center g-4 justify-content-center">
                {/* Qutir Mahal */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" >
                    <div className="project-carousel">
                        <Carousel indicators={false}>
                            <Carousel.Item interval={1000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={qutirMahal} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1500} >
                                <div className="project-img">
                                    <img className="img-fluid" src={qutirMahal1} alt="" />
                                </div>

                            </Carousel.Item>
                            <Carousel.Item interval={1800}>
                                <div className="project-img">
                                    <img className="img-fluid" src={qutirMahal2} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={qutirMahal3} alt="" />
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                    <div className="project-text my-3">
                        <h1 className="project-title">Qutir Mahal</h1>
                        <div className="d-flex flex-wrap justify-content-around my-4">
                            <img style={{ height: '35px' }} src={react} alt="" />
                            <img style={{ height: '35px' }} src={bootstrap} alt="" />
                            <img style={{ height: '35px' }} src={firebase} alt="" />
                            <img style={{ height: '35px' }} src={nodejs} alt="" />
                            <img style={{ height: '35px' }} src={mongodb} alt="" />
                        </div>
                        <p>Online based Pottery Selling  MERN web application </p>
                        <a href=" https://github.com/irfanhsajid/Qutir-Mahal--Client-Side--MERN-Project" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code me-1"></i> ClientSide</button>
                        </a>
                        <a href=" https://qutir-mahal-mern-project.web.app/" target="_blank">
                            <button className="btn-outline-danger  ms-2  px-3 py-1 rounded-1"><i className="fas fa-globe me-1"></i> Live Site</button>
                        </a>

                        <a href=" https://github.com/irfanhsajid/Qutir-Mahal--Server-Side--MERN-Project" target="_blank">
                            <button className=" btn-outline-danger ms-2 mt-2 px-3 py-1 rounded-1">  <i className="fas fa-code me-1"></i> ServerSide </button>
                        </a>
                    </div>
                </div>
                {/* TourMania */}
                <div className="projects  col-12 col-md-6" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" >

                    <div className="project-carousel">
                        <Carousel indicators={false}>
                            <Carousel.Item interval={1000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={tourMania} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1500} >
                                <div className="project-img">
                                    <img className="img-fluid" src={tourMania1} alt="" />
                                </div>

                            </Carousel.Item>
                            <Carousel.Item interval={1800}>
                                <div className="project-img">
                                    <img className="img-fluid" src={tourMania2} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={tourMania3} alt="" />
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                    <div className="project-text my-3">
                        <h1 className="project-title">TourMania</h1>
                        <div className="d-flex flex-wrap justify-content-around my-4">
                            <img style={{ height: '35px' }} src={react} alt="" />
                            <img style={{ height: '35px' }} src={bootstrap} alt="" />
                            <img style={{ height: '35px' }} src={firebase} alt="" />
                            <img style={{ height: '35px' }} src={nodejs} alt="" />
                            <img style={{ height: '35px' }} src={mongodb} alt="" />
                        </div>
                        <p> Tour Management system MERN web application </p>
                        <a href=" https://github.com/irfanhsajid/TourMania-Client-Side--MERN-Stack-tourism-site" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1">  <i className="fas fa-code me-1"></i> ClientSide</button>
                        </a>

                        <a href=" https://tourmania-react-node-mongo.web.app/ " target="_blank">
                            <button className="btn-outline-danger  ms-2  px-3 py-1 rounded-1"><i className="fas fa-globe me-1"></i> Live Site</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/TourMania-Server-Side--MERN-Stack-tourism-site" target="_blank">
                            <button className=" btn-outline-danger server-btn ms-2  px-3 py-1 mt-2 rounded-1">  <i className="fas fa-code me-1"></i> ServerSide </button>
                        </a>
                    </div>
                </div>
                {/* MedSphere the Healthcare */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" >
                    <div className="project-carousel">
                        <Carousel indicators={false}>
                            <Carousel.Item interval={1000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={medSphere1} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1500} >
                                <div className="project-img">
                                    <img className="img-fluid" src={medSphere2} alt="" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="project-text my-3">
                        <h1 className="project-title">MedSphere</h1>
                        <div className="d-flex flex-wrap justify-content-around my-4">
                            <img style={{ height: '35px' }} src={css} alt="" />
                            <img style={{ height: '35px' }} src={react} alt="" />
                            <img style={{ height: '35px' }} src={bootstrap} alt="" />
                            <img style={{ height: '35px' }} src={firebase} alt="" />
                        </div>
                        <p>Doctors Clinic REACT web application </p>
                        <a href=" https://medsphere-the-healthcare-site.web.app/" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe me-1"></i> Live Site</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/MedSphere-healthcare-site-using-firebase-authentication-and-react-router" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code me-1"></i> GitHub</button>
                        </a>
                    </div>
                </div>



                {/* Macbook Cart */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" >
                    <div className="project-carousel">
                        <Carousel indicators={false}>
                            <Carousel.Item interval={1000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={macbook1} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1500} >
                                <div className="project-img">
                                    <img className="img-fluid" src={macbook2} alt="" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="project-text my-3">
                        <h1 className="project-title">Mackbook Cart</h1>
                        <div className="d-flex flex-wrap justify-content-around my-4">
                            <img style={{ height: '35px' }} src={html} alt="" />
                            <img style={{ height: '35px' }} src={css} alt="" />
                            <img style={{ height: '35px' }} src={bootstrap} alt="" />
                            <img style={{ height: '35px' }} src={js} alt="" />
                        </div>
                        <p> Simple Shopping Cart using Vanila Js </p>
                        <a href=" https://mackbook-pro-cart-irfanhsajid.netlify.app/" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe me-1"></i> Live Site</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/MacBook-Pro-Shopping-Cart-by-Basic-JS" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code me-1"></i> GitHub</button>
                        </a>
                    </div>
                </div>
                {/* Honda CBR */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" >
                    <div className="project-carousel">
                        <Carousel indicators={false}>
                            <Carousel.Item interval={1000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={hondaCbr1} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1500} >
                                <div className="project-img">
                                    <img className="img-fluid" src={hondaCbr2} alt="" />
                                </div>

                            </Carousel.Item>
                            <Carousel.Item interval={1800}>
                                <div className="project-img">
                                    <img className="img-fluid" src={hondaCbr3} alt="" />
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>

                    <div className="project-text my-3">
                        <h1 className="project-title">Honda CBR</h1>
                        <div className="d-flex flex-wrap justify-content-around my-4">
                            <img style={{ height: '35px' }} src={html} alt="" />
                            <img style={{ height: '35px' }} src={css} alt="" />
                            <img style={{ height: '35px' }} src={bootstrap} alt="" />

                        </div>
                        <p>  Honda CBR featuring landing page </p>
                        <a href=" https://irfanhsajid.github.io/Honda-CBR-Responsive-Page-Bootstrap-5/" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe me-1"></i> Live Site</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/Honda-CBR-Responsive-Page-Bootstrap-5" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code me-1"></i> GitHub</button>
                        </a>
                    </div>
                </div>

                {/* The FoodZone restaurent */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" >
                    <div className="project-carousel">
                        <Carousel indicators={false}>
                            <Carousel.Item interval={1000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={foodZone1} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1500} >
                                <div className="project-img">
                                    <img className="img-fluid" src={foodZone2} alt="" />
                                </div>

                            </Carousel.Item>
                            <Carousel.Item interval={1800}>
                                <div className="project-img">
                                    <img className="img-fluid" src={foodZone3} alt="" />
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>

                    <div className="project-text my-3">
                        <h1 className="project-title">FoodZone Club</h1>
                        <div className="d-flex flex-wrap justify-content-around my-4">
                            <img style={{ height: '35px' }} src={html} alt="" />
                            <img style={{ height: '35px' }} src={css} alt="" />
                            <img style={{ height: '35px' }} src={bootstrap} alt="" />

                        </div>
                        <p> FoodZone Restaurent featuring landing page </p>
                        <a href=" https://irfanhsajid.github.io/food-zone-project--using-html-css/" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe me-1"></i> Live Site</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/food-zone-project--using-html-css" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code me-1"></i> GitHub</button>
                        </a>
                    </div>
                </div>



            </div>
        </div>

    );
};

export default Projects;