import React, { useEffect, useState } from 'react';
import './PaginaPrincipal.css';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const PaginaPrincipal = () => {
    return (
        <Navbar>
            <div className="container my-5" >
                <div className="text-center mb-5" style={{ marginTop: '6rem' }}>
                    <h2 className="fw-bold">Bienvenido al Panel de Administración de SIGEDOC</h2>
                    <p className="text-muted">
                        Gestiona de manera eficiente los usuarios, documentos y permisos del sistema.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">

                    <div className="col-md-4">
                        <Link to="/ParamUsuarios" className="text-decoration-none">
                            <div className="card h-100 border-dark-subtle shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">1. Usuarios</h5>
                                    <p className="card-text">Crea, edita, elimina y gestiona los roles de los usuarios en el sistema.</p>
                                </div>
                            </div>
                        </Link>
                    </div>



                    <div className="col-md-4">
                        <Link to="/ParamCiudades" className="text-decoration-none">
                            <div className="card h-100 border-dark-subtle shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">2. Ciudades</h5>
                                    <p className="card-text">Administra la información de las ciudades registradas en el sistema.</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 border-dark-subtle shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">3. Sedes</h5>
                                <p className="card-text">Agrega, edita o elimina las sedes de cada ciudad.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <Link to="/ParamTiposDoc" className="text-decoration-none">
                            <div className="card h-100 border-dark-subtle shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">4. Tipos de Documentos</h5>
                                    <p className="card-text">Administra la información de los documentos registrados en el sistema.</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 border-dark-subtle shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">5. Áreas</h5>
                                <p className="card-text">Define y estructura las áreas de trabajo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}

export default PaginaPrincipal;
