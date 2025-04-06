import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <nav className="navbar navbar-expand-lg navbar-light bg-white px-4">
                <div className="navbar-brand d-flex align-items-center">
                    <img src="src\assets\SIGEDOC.png" alt="SIGEDOC Logo" style={{ height: '40px' }} />
                </div>
                <div className="collapse navbar-collapse justify-content-end">
                    <Link to="/FormularioRegistro">
                        <button className="btn btn-dark me-3">Registrate</button>
                    </Link>
                    <button className="btn btn-warning" style={{ marginRight: '5rem' }}>Ayuda</button>
                </div>
            </nav>

            <div className="main-content container-fluid d-flex align-items-center justify-content-between fondo-landing" >

                <div className="text-content p-5">
                    <h1 className="fw-bold">Bienvenido al sistema<br />Integral de Gestion Documental</h1>
                    <p className="text-muted">La solución inteligente para la radicación y gestión de documentos</p>
                    <Link to="/LoginForm">
                        <button className="btn btn-dark mt-3">Iniciar Sesion</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
