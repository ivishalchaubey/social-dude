import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark sticky-top" data-bs-theme="dark">
                <div className="container">
                    <NavLink to='' className="navbar-brand pe">
                        socialDudde
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-auto" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <NavLink to='/profile' className="nav-link">@ivishalchaubey</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Chat</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink to='/profile' className="dropdown-item">
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/editprofile' className="dropdown-item">
                                            Edit Profile
                                        </NavLink>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                    <NavLink to='/login' className="dropdown-item">Logout</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar