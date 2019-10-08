import React from 'react';
import "../App.scss";
import { Link } from 'react-router-dom'



export default (props) => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/locations">Locations</Link>
                    <Link to="/locations/new">Create Location</Link>
                </div>

            </div>

        </nav>
    )

};

