import React from 'react';
import './Banner.css';
import img from '../../Images/sajid_blackwhite.png'

const Banner = () => {
    return (
        <div div className="py-5">
            <div className="container banner-container ">
                <div className="left">
                    <div className="banner-text">
                        <p>WELCOME TO MY PORTFOLIO</p>
                        <div className="py-2">
                            <h1>Hi, I'm <span className="text-danger">Irfan Sajid</span> <br /> a Front-end Developer. </h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quo recusandae non aspernatur iste neque assumenda magni deleniti quod repellat.</p>
                        </div>
                        <a href=" https://drive.google.com/file/d/1PQZPN544GbJdxy82smTYapnuoZ6Z0WSH/view" target="_blank" > <button className="btn-danger border-0 px-4 py-1 rounded-2">DOWNLOAD RESUME</button></a>
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