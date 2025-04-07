import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ciudades = [
    { id: 1, nombre: 'Bogota' },
    { id: 2, nombre: 'Medellin' },
];

const ParamCiudades = () => {
    const [tipos, setCiudades] = useState(ciudades);
    const [busqueda, setBusqueda] = useState('');
    const [confirmarEliminacion, setConfirmarEliminacion] = useState(null);

    const handleEliminar = (id) => {
        setCiudades(tipos.filter((t) => t.id !== id));
        setConfirmarEliminacion(null);
    };

    const tiposFiltrados = tipos.filter((t) =>
        t.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="container py-4">
            <Link to="/PaginaPrincipal" className="text-decoration-none">
                <button className="btn btn-link text-dark mb-3">← Atrás</button>
            </Link>

            <h2 className="fw-bold">Bienvenido al Panel de Ciudades</h2>

            <div className="d-flex gap-2 mb-4">
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Buscar tipo documento..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />


                <button className="btn btn-link p-0" style={{ marginLeft: "37rem" }}>
                    <i className="bi bi-plus-circle fs-3"></i>
                </button>
            </div>

            <table className="table table-bordered text-center align-middle">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tiposFiltrados.map((tipo) => (
                        <tr key={tipo.id}>
                            <td>{tipo.id}</td>
                            <td>{tipo.nombre}</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => setConfirmarEliminacion(tipo.id)}
                                    >
                                        🗑
                                    </button>
                                    <button className="btn btn-sm btn-outline-secondary">
                                        ✏️
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="text-end">
                <button className="btn btn-primary">Guardar cambios</button>
            </div>
        </div>
    );
};

export default ParamCiudades;
