import React from 'react';
import './projects.css';
import { Carousel } from 'react-bootstrap';

import qutirMahal from '../../Images/Projects SS/Qutir-Mahal/qutir-mahal.png';
import qutirMahal1 from '../../Images/Projects SS/Qutir-Mahal/qutir-mahal1.png';
import qutirMahal2 from '../../Images/Projects SS/Qutir-Mahal/qutir-mahal2.png';
import qutirMahal3 from '../../Images/Projects SS/Qutir-Mahal/qutir-mahal3.png';
import qutirMahal4 from '../../Images/Projects SS/Qutir-Mahal/qutir-mahal4.png';

import tourMania from '../../Images/Projects SS/TourMania/tourMania.png';
import tourMania1 from '../../Images/Projects SS/TourMania/tourMania1.png';
import tourMania2 from '../../Images/Projects SS/TourMania/tourMania2.png';
import tourMania3 from '../../Images/Projects SS/TourMania/tourMania3.png';
import tourMania4 from '../../Images/Projects SS/TourMania/tourMania4.png';
import tourMania5 from '../../Images/Projects SS/TourMania/tourMania5.png';

import medSphere1 from '../../Images/Projects SS/MedSphere/medsphere1.png';
import medSphere2 from '../../Images/Projects SS/MedSphere/medsphere2.png';
import medSphere3 from '../../Images/Projects SS/MedSphere/medsphere3.png';

import educare1 from '../../Images/Projects SS/Irfans Edu Care/irfans-edu-care1.png'
import educare2 from '../../Images/Projects SS/Irfans Edu Care/irfans-edu-care2.png'
import educare3 from '../../Images/Projects SS/Irfans Edu Care/irfans-edu-care3.png'
import educare4 from '../../Images/Projects SS/Irfans Edu Care/irfans-edu-care4.png'

import footballSite1 from '../../Images/Projects SS/Football Site/football-site1.png'
import footballSite2 from '../../Images/Projects SS/Football Site/football-site2.png'
import footballSite3 from '../../Images/Projects SS/Football Site/football-site3.png'

import macbook1 from '../../Images/Projects SS/MackBook/mackbook-pro1.png'
import macbook2 from '../../Images/Projects SS/MackBook/mackbook-pro2.png'

import leader1 from '../../Images/Projects SS/Leader Board/leaderboard1.png'
import leader2 from '../../Images/Projects SS/Leader Board/leaderboard2.png'

import hondaCbr1 from '../../Images/Projects SS/Honda-CBR/honda-cbr1.png'
import hondaCbr2 from '../../Images/Projects SS/Honda-CBR/honda-cbr2.png'
import hondaCbr3 from '../../Images/Projects SS/Honda-CBR/honda-cbr3.png'

import foodZone1 from '../../Images/Projects SS/Food Zone/food-zone1.png'
import foodZone2 from '../../Images/Projects SS/Food Zone/food-zone2.png'
import foodZone3 from '../../Images/Projects SS/Food Zone/food-zone3.png'

import pandaCm1 from '../../Images/Projects SS/Panda Commerce/panda-commerce1.png'
import pandaCm2 from '../../Images/Projects SS/Panda Commerce/panda-commerce2.png'
import pandaCm3 from '../../Images/Projects SS/Panda Commerce/panda-commerce3.png'
const Projects = () => {
    return (
        <div className="container ">
            <h2 className="text-center my-3">My Latest Projects</h2>
            <p className="borde1 border-danger border-bottom d-flex mx-auto w-50"></p>
            <div id="projects" className="projects-container mt-5 row text-center g-4 justify-content-center">
                {/* Qutir Mahal */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" >
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
                            <Carousel.Item interval={2000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={qutirMahal4} alt="" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="project-text my-2">
                        <h3>Qutir Mahal (MERN Stack)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, delectus.</p>
                        <a href=" https://github.com/irfanhsajid/Qutir-Mahal--Client-Side--MERN-Project" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code"></i> ClientSide</button>
                        </a>
                        <a href=" https://qutir-mahal-mern-project.web.app/" target="_blank">
                            <button className="btn-outline-danger  ms-2  px-3 py-1 rounded-1"><i className="fas fa-globe"></i> Preview</button>
                        </a>

                        <a href=" https://github.com/irfanhsajid/Qutir-Mahal--Server-Side--MERN-Project" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1">  <i className="fas fa-code"></i> ServerSide </button>
                        </a>
                    </div>
                </div>
                {/* TourMania */}
                <div className="projects  col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" >

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
                            <Carousel.Item interval={2000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={tourMania4} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={tourMania5} alt="" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="project-text my-2">
                        <h3>TourMania (MERN Stack)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, delectus.</p>
                        <a href=" https://github.com/irfanhsajid/TourMania-Client-Side--MERN-Stack-tourism-site" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1">  <i className="fas fa-code"></i> ClientSide</button>
                        </a>

                        <a href=" https://tourmania-react-node-mongo.web.app/ " target="_blank">
                            <button className="btn-outline-danger  ms-2  px-3 py-1 rounded-1"><i className="fas fa-globe"></i> Preview</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/TourMania-Server-Side--MERN-Stack-tourism-site" target="_blank">
                            <button className=" btn-outline-danger server-btn ms-2  px-3 py-1 mt-2 rounded-1">  <i className="fas fa-code"></i> ServerSide </button>
                        </a>
                    </div>
                </div>
                {/* MedSphere the Healthcare */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" >
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
                            <Carousel.Item interval={1800}>
                                <div className="project-img">
                                    <img className="img-fluid" src={medSphere3} alt="" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="project-text my-2">
                        <h3>MedSphere (React UI) </h3>
                        <p>Nostrum reiciendis exercitationem voluptate voluptatibus eligendi odio deserunt ab hic!</p>
                        <a href=" https://medsphere-the-healthcare-site.web.app/" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe"></i> Preview</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/MedSphere-healthcare-site-using-firebase-authentication-and-react-router" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code"></i> GitHub</button>
                        </a>
                    </div>
                </div>

                {/* Irfans Edu care */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" >
                    <div className="project-carousel">
                        <Carousel indicators={false}>
                            <Carousel.Item interval={1000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={educare1} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1500} >
                                <div className="project-img">
                                    <img className="img-fluid" src={educare2} alt="" />
                                </div>

                            </Carousel.Item>
                            <Carousel.Item interval={1800}>
                                <div className="project-img">
                                    <img className="img-fluid" src={educare3} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={educare4} alt="" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="project-text my-2">
                        <h3>Irfans Edu Care (React UI) </h3>
                        <p>Nostrum reiciendis exercitationem voluptate voluptatibus eligendi odio deserunt ab hic!</p>
                        <a href=" https://irfans-edu-care.netlify.app/" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe"></i> Preview</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/Irfans-Edu-care---React-Router-and-Rest-API" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code"></i> GitHub</button>
                        </a>
                    </div>
                </div>

                {/* Macbook Cart */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" >
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

                    <div className="project-text my-2">
                        <h3>MackBook Cart (Basic JS) </h3>
                        <p>Nostrum reiciendis exercitationem voluptate voluptatibus eligendi odio deserunt ab hic!</p>
                        <a href=" https://mackbook-pro-cart-irfanhsajid.netlify.app/" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe"></i> Preview</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/MacBook-Pro-Shopping-Cart-by-Basic-JS" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code"></i> GitHub</button>
                        </a>
                    </div>
                </div>
                {/* Honda CBR */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" >
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

                    <div className="project-text my-2">
                        <h3> Honda CBR (Bootstrap 5) </h3>
                        <p>Nostrum reiciendis exercitationem voluptate voluptatibus eligendi odio deserunt ab hic!</p>
                        <a href=" https://irfanhsajid.github.io/Honda-CBR-Responsive-Page-Bootstrap-5/" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe"></i> Preview</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/Honda-CBR-Responsive-Page-Bootstrap-5" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code"></i> GitHub</button>
                        </a>
                    </div>
                </div>
                {/* Copa America 2021 */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" >
                    <div className="project-carousel">
                        <Carousel indicators={false}>
                            <Carousel.Item interval={1000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={footballSite1} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1500} >
                                <div className="project-img">
                                    <img className="img-fluid" src={footballSite2} alt="" />
                                </div>

                            </Carousel.Item>
                            <Carousel.Item interval={1800}>
                                <div className="project-img">
                                    <img className="img-fluid" src={footballSite3} alt="" />
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>

                    <div className="project-text my-2">
                        <h3>Copa America 2021 </h3>
                        <p>Nostrum reiciendis exercitationem voluptate voluptatibus eligendi odio deserunt ab hic!</p>
                        <a href=" https://irfanhsajid.github.io/Responsive_football_site-using-HTML-and-CSS/index.html" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe"></i> Preview</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/Responsive_football_site-using-HTML-and-CSS" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code"></i> GitHub</button>
                        </a>
                    </div>
                </div>
                {/* The FoodZone restaurent */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" >
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

                    <div className="project-text my-2">
                        <h3>The FoodZone Restaurent </h3>
                        <p>Nostrum reiciendis exercitationem voluptate voluptatibus eligendi odio deserunt ab hic!</p>
                        <a href=" https://irfanhsajid.github.io/food-zone-project--using-html-css/" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe"></i> Preview</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/food-zone-project--using-html-css" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code"></i> GitHub</button>
                        </a>
                    </div>
                </div>
                {/* Panda Commerce BootStrap */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" >
                    <div className="project-carousel">
                        <Carousel indicators={false}>
                            <Carousel.Item interval={1000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={pandaCm1} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1500} >
                                <div className="project-img">
                                    <img className="img-fluid" src={pandaCm2} alt="" />
                                </div>

                            </Carousel.Item>
                            <Carousel.Item interval={1800}>
                                <div className="project-img">
                                    <img className="img-fluid" src={pandaCm3} alt="" />
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>

                    <div className="project-text my-2">
                        <h3>Panda Commerce (Bootstrap) </h3>
                        <p>Nostrum reiciendis exercitationem voluptate voluptatibus eligendi odio deserunt ab hic!</p>
                        <a href=" https://irfanhsajid.github.io/Panda-Commerce-via-Bootstrap-/" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe"></i> Preview</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/Panda-Commerce-via-Bootstrap-" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code"></i> GitHub</button>
                        </a>
                    </div>
                </div>
                {/* leader Board CSS */}
                <div className="projects col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" >
                    <div className="project-carousel">
                        <Carousel indicators={false}>
                            <Carousel.Item interval={1000}>
                                <div className="project-img">
                                    <img className="img-fluid" src={leader1} alt="" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1500} >
                                <div className="project-img">
                                    <img className="img-fluid" src={leader2} alt="" />
                                </div>

                            </Carousel.Item>


                        </Carousel>
                    </div>

                    <div className="project-text my-2">
                        <h3> LeaderBoard CSS </h3>
                        <p>Nostrum reiciendis exercitationem voluptate voluptatibus eligendi odio deserunt ab hic!</p>
                        <a href=" https://irfanhsajid.github.io/leader-board-responsive-site--CSS3-/index.html" target="_blank">
                            <button className="btn-outline-danger   px-3 py-1 rounded-1"><i className="fas fa-globe"></i> Preview</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/leader-board-responsive-site--CSS3-" target="_blank">
                            <button className=" btn-outline-danger ms-2  px-3 py-1 rounded-1"> <i className="fas fa-code"></i> GitHub</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Projects;