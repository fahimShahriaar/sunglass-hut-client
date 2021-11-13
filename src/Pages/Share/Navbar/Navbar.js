import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h5>Sunglass Hut</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink style={{ textDecoration: 'none', color: 'black', marginLeft: '2rem' }} to='/home'>  Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={{ textDecoration: 'none', color: 'black', marginLeft: '2rem' }} to='/products'>  Products </NavLink>
                            </li>

                            {user?.email &&
                                <li className="nav-item">
                                    <NavLink style={{ textDecoration: 'none', color: 'black', marginLeft: '2rem' }} to='/dashboard'> Dashboard</NavLink>
                                </li>

                            }


                        </ul>
                        <form className="d-flex">

                            {
                                user?.email ?
                                    <div className="d-flex">

                                        <button onClick={logout} className="btn btn-outline-dark me-4" >Log out</button>
                                    </div>
                                    :


                                    <NavLink to='/login'>  <button className="btn btn-outline-dark me-4" type="submit">Login</button></NavLink>

                            }
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;