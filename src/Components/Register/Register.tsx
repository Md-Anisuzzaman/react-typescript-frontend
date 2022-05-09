import React, { useState } from 'react';
import './Register.css'
import { NavLink } from 'react-router-dom';


const Register = () => {



    const [loginData, setLoginData] = useState({});



    return (
        <>
            <div className="register-body">
                <div className="container">
                    <div className='row'>
                        <div className='register-container'>
                            <h1 className='text-light mb-3 ms-2'>Register</h1>
                            <img className='w-25 img-style-register' src="https://www.vhv.rs/dpng/d/509-5096993_login-icon-vector-png-clipart-png-download-user.png" alt="" />
                            <form >
                                <div className='register-input-filed'>
                                    <input className="form-control" type="text" name="name" required placeholder='Name' autoComplete='off' />
                                </div>
                                <div className='register-input-filed'>
                                    <input className="form-control" type="email" name="email" required placeholder='User Email' autoComplete='off' />
                                </div>
                                <div className='register-input-filed'>
                                    <input className="form-control" type="password" name="password" required placeholder='Password' autoComplete='off' />
                                </div>
                                <button className='btn-style-register btn btn-primary' type="submit">Sign In</button>
                                <br />
                                <br />
                                <NavLink className="text-warning pb-2" style={{ textDecoration: 'none', fontSize: '25px' }} to='/login'>Already Registered? Go to Login</NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;