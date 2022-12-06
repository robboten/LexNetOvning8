import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Kaffeparty</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link" >Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/events" className="nav-link" >Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" >About</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;