import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'
import signpic from '../../images/signPic.jpg'

const Login = () => {
    const loginRef: React.MutableRefObject<any> = useRef(null)
    const [loginData, setLoginData] = useState({});

    useEffect(() => {
        executeScroll();
    }, [])

    const executeScroll = () => loginRef.current.scrollIntoView();

    return (
        <>
            <div ref={loginRef} className="login-body">
                <div className="container">
                    <div className="row">
                        <div className="login__main">
                            <div className="login__left">
                                {/* <img src={signpic} alt="" /> */}
                            </div>
                            <div className='login-container'>
                                <h1 className='text-light'>Log In</h1>
                                <img className='img-style-login w-25' src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg" alt="" />
                                <form className='login__form'>
                                    <div className='input-filed'>
                                        <input className="form-control" type="text" name="email" id="" placeholder='User Email' autoComplete='off' />
                                    </div>
                                    <div className='input-filed'>
                                        <input className="form-control" type="password" name="password" placeholder='Password' id="" autoComplete='off' />
                                    </div>
                                    <button className='btn-style btn btn-primary' type="submit">Login</button>
                                    <br />
                                    <br />
                                    <NavLink className="text-warning pb-2" style={{ textDecoration: 'none', fontSize: '25px' }} to='/register'>Didn't Registered? Go to Register</NavLink>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Login;

//https://www.youtube.com/watch?v=WvRwiE9IkFg