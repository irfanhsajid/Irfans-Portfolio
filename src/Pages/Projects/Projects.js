import React from 'react';
import './projects.css';
import qutirMahal from '../../Images/Projects Banner/qutir-mahal.png';
import tourMania from '../../Images/Projects Banner/tourmania.png';
import medSphere from '../../Images/Projects Banner/medsphere.png';
const Projects = () => {
    return (
        <div className="container ">
            <h2 className="text-center my-3">My latest Projects</h2>
            <p className="borde1 border-danger border-bottom d-flex mx-auto w-50"></p>
            <div className="projects-container mt-5 row text-center g-4 justify-content-center">
                <div className="projects me-4 col-12 col-md-6">
                    <div className="project-img">
                        <img className="img-fluid" src={medSphere} alt="" />
                    </div>
                    <div className="project-text my-2">
                        <h3>MedSphere (React UI) </h3>
                        <p>Nostrum reiciendis exercitationem voluptate voluptatibus eligendi odio deserunt ab hic!</p>
                        <a href=" https://medsphere-the-healthcare-site.web.app/" target="_blank">
                            <button className="btn-outline-danger  border-0 px-3 py-1 rounded-1">Live Preview</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/MedSphere-healthcare-site-using-firebase-authentication-and-react-router" target="_blank">
                            <button className=" btn-outline-danger ms-2 border-0 px-3 py-1 rounded-1">GitHub Code</button>
                        </a>
                    </div>
                </div>

                <div className="projects ms-4 col-12 col-md-6">
                    <div className="project-img">
                        <img className="img-fluid" src={qutirMahal} alt="" />
                    </div>
                    <div className="project-text my-2">
                        <h3>Qutir Mahal (MERN Stack)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, delectus.</p>
                        <a href=" https://github.com/irfanhsajid/Qutir-Mahal--Client-Side--MERN-Project" target="_blank">
                            <button className=" btn-outline-danger ms-2 border-0 px-3 py-1 rounded-1">ClientSide Code</button>
                        </a>
                        <a href=" https://qutir-mahal-mern-project.web.app/" target="_blank">
                            <button className="btn-outline-danger border-0 ms-2  px-3 py-1 rounded-1">Live Preview</button>
                        </a>

                        <a href=" https://github.com/irfanhsajid/Qutir-Mahal--Server-Side--MERN-Project" target="_blank">
                            <button className=" btn-outline-danger ms-2 border-0 px-3 py-1 rounded-1">ServerSide Code</button>
                        </a>
                    </div>
                </div>

                <div className="projects  col-12 col-md-6">

                    <div className="project-img">
                        <img className="img-fluid" src={tourMania} alt="" />
                    </div>
                    <div className="project-text my-2">
                        <h3>TourMania (MERN Stack)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, delectus.</p>
                        <a href=" https://github.com/irfanhsajid/TourMania-Client-Side--MERN-Stack-tourism-site" target="_blank">
                            <button className=" btn-outline-danger ms-2 border-0 px-3 py-1 rounded-1">ClientSide Code</button>
                        </a>

                        <a href=" https://tourmania-react-node-mongo.web.app/ " target="_blank">
                            <button className="btn-outline-danger border-0 ms-2  px-3 py-1 rounded-1">Live Preview</button>
                        </a>
                        <a href=" https://github.com/irfanhsajid/TourMania-Server-Side--MERN-Stack-tourism-site" target="_blank">
                            <button className=" btn-outline-danger ms-2 border-0 px-3 py-1 rounded-1">ServerSide Code</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;