import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const usuariosIniciales = [
    {
        id: 1,
        documento: '1123457',
        nombre: 'Juan Diego Paez',
        fecha: '2023-11-01',
        rol: 'Radicador',
        ciudad: 'Medellín',
        sede: 'Central',
    },
    {
        id: 2,
        documento: '7138384',
        nombre: 'Samuel Lopez',
        fecha: '2023-11-02',
        rol: 'Gestionador',
        ciudad: 'Bogotá',
        sede: 'Central',
    },
];

const ParamUsuarios = () => {
    const [usuarios, setUsuarios] = useState(usuariosIniciales);
    const [busqueda, setBusqueda] = useState('');

    const handleRolChange = (id, nuevoRol) => {
        const actualizados = usuarios.map((u) =>
            u.id === id ? { ...u, rol: nuevoRol } : u
        );
        setUsuarios(actualizados);
    };

    const handleCiudadChange = (id, nuevaCiudad) => {
        const actualizados = usuarios.map((u) =>
            u.id === id ? { ...u, ciudad: nuevaCiudad } : u
        );
        setUsuarios(actualizados);
    };

    const handleSedeChange = (id, nuevaSede) => {
        const actualizados = usuarios.map((u) =>
            u.id === id ? { ...u, sede: nuevaSede } : u
        );
        setUsuarios(actualizados);
    };

    const usuariosFiltrados = usuarios.filter((u) =>
        u.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="container py-4">
            <Link to="/PaginaPrincipal" className="text-decoration-none">
                <button className="btn btn-link text-dark mb-3">← Atrás</button>
            </Link>

            <h2 className="fw-bold">Bienvenido al Panel de Usuarios</h2>

            <div className="d-flex gap-2 mt-3 mb-4">
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Buscar Usuario..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />

                <button className="btn btn-link p-0" style={{ marginLeft: "37rem" }}>
                    <i className="bi bi-person-fill-add fs-3"></i>
                </button>
            </div>

            <table className="table table-bordered text-center align-middle">
                <thead className="table-dark">
                    <tr>
                        <th></th>
                        <th>Documento</th>
                        <th>Nombre/s</th>
                        <th>Fecha</th>
                        <th>Rol</th>
                        <th>Ciudad</th>
                        <th>Sede</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {usuariosFiltrados.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>
                                <button className="btn btn-link p-0">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                            <td>{usuario.documento}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.fecha}</td>
                            <td>
                                {/* Select con valores quemados para Rol */}
                                <select
                                    className="form-select"
                                    value={usuario.rol}
                                    onChange={(e) => handleRolChange(usuario.id, e.target.value)}
                                >
                                    <option value="Radicador">Radicador</option>
                                    <option value="Gestionador">Gestionador</option>
                                    <option value="Administrador">Administrador</option>
                                </select>
                            </td>
                            <td>
                                {/* Select con valores quemados para Ciudad */}
                                <select
                                    className="form-select"
                                    value={usuario.ciudad}
                                    onChange={(e) => handleCiudadChange(usuario.id, e.target.value)}
                                >
                                    <option value="Medellín">Medellín</option>
                                    <option value="Bogotá">Bogotá</option>
                                    <option value="Cali">Cali</option>
                                </select>
                            </td>
                            <td>
                                {/* Select con valores quemados para Sede */}
                                <select
                                    className="form-select"
                                    value={usuario.sede}
                                    onChange={(e) => handleSedeChange(usuario.id, e.target.value)}
                                >
                                    <option value="Central">Central</option>
                                    <option value="Norte">Norte</option>
                                    <option value="Sur">Sur</option>
                                </select>
                            </td>
                            <td>
                                <button className="btn btn-link p-0">
                                    <i className="bi bi-pencil-square"></i>
                                </button>
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

export default ParamUsuarios;