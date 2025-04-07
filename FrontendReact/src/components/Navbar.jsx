import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Navbar = ({ children }) => { // children inserta el contenido en la pagina.
    return (
        <div>
            {/* Sidebar */}
            <div className="landing-page">
                <nav className="navbar navbar-expand-lg px-4" style={{ backgroundColor: '#f3f1ec' }}>
                    <div className="navbar-brand d-flex align-items-center">
                        <img src="src\assets\SIGEDOC.png" alt="SIGEDOC Logo" style={{ height: '40px' }} />
                    </div>
                    <div className="collapse navbar-collapse justify-content-end">
                        <button className="btn btn-warning" style={{ marginRight: '5rem' }}>Ayuda</button>
                    </div>
                </nav>


                {/* Aqui se muestar el contenido de las paginas*/}
                <div className="container-fluid">
                    {children}
                </div>
            </div>
        </div>

    );
};

export default Navbar;

