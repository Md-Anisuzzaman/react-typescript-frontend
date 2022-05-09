import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo-ielts.png'


const Header = () => {

    return (
        <div className="header-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 ps-5 pe-5 d-flex flex-wrap justify-content-between">
                        <div className='logo-container'>
                            <img className='logo-style logo__image mt-2' src='http://milinix.com/wp-content/uploads/2019/08/logo512.png' alt="" />
                        </div>
                        <div className='responsive-container'>

                            <ul className=" ul-responsive d-flex flex-wrap mt-4 ul-design align-items-end justify-content-end">
                                <li>
                                    <Link to="/home" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/courses" className="nav-link">
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="nav-link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="nav-link">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/addCourses" className="nav-link">
                                        AddCourses
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='div-container'>
                    <h1 className='brand-color'>IELTS Bangladesh</h1>
                    <p className="text-rong mt-3">Prepare yourself and grab the opportunity to represent internationally
                        <br />Our highly qualified teachers deliver an interactive learning experience in our classrooms </p>
                    <p style={{ color: '#FFD700' }}>Now, it's your chance <i className=" icon-size far fa-thumbs-up"></i></p>
                </div>
                <div>
                    <img className='header__image' src="https://image.shutterstock.com/image-photo/ielts-international-english-language-testing-260nw-2016150863.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;