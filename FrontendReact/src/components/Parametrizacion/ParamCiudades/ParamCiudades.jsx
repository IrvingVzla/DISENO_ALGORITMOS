import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ModalAgregarCiudad from "./ModalAgregarCiudad";
import ModalActualizarCiudad from "./ModalActualizarCiudad";

const ciudades = [
  { id: 1, nombre: "Bogota", estado: "Activo" },
  { id: 2, nombre: "Medellin", estado: "Activo" },
];

const ParamCiudades = () => {
  const [tipos, setCiudades] = useState(ciudades);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarModalAgregar, setMostrarModalAgregar] = useState(false);
  const [mostrarModalActualizar, setMostrarModalActualizar] = useState(false);
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null);

  const handleAgregarCiudad = (nuevaCiudad) => {
    const nueva = {
      id: tipos.length ? tipos[tipos.length - 1].id + 1 : 1,
      ...nuevaCiudad,
    };
    setCiudades([...tipos, nueva]);
  };

  const handleActualizarCiudad = (ciudadActualizada) => {
    const actualizadas = tipos.map((ciudad) =>
      ciudad.id === ciudadActualizada.id ? ciudadActualizada : ciudad
    );
    setCiudades(actualizadas);
    setMostrarModalActualizar(false);
  };

  const handleEliminar = (id) => {
    setCiudades(tipos.filter((t) => t.id !== id));
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
          placeholder="Buscar ciudad..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button
          className="btn btn-link p-0"
          style={{ marginLeft: "37rem" }}
          onClick={() => setMostrarModalAgregar(true)}
        >
          <i className="bi bi-plus-circle fs-3"></i>
        </button>
      </div>

      <table className="table table-bordered text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tiposFiltrados.map((tipo) => (
            <tr key={tipo.id}>
              <td>{tipo.id}</td>
              <td>{tipo.nombre}</td>
              <td>{tipo.estado}</td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-link p-0 text-danger"
                    onClick={() => handleEliminar(tipo.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <button
                    className="btn btn-link p-0 text-primary"
                    onClick={() => {
                      setCiudadSeleccionada(tipo);
                      setMostrarModalActualizar(true);
                    }}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalAgregarCiudad
        show={mostrarModalAgregar}
        onClose={() => setMostrarModalAgregar(false)}
        onAgregar={handleAgregarCiudad}
      />

      {ciudadSeleccionada && (
        <ModalActualizarCiudad
          show={mostrarModalActualizar}
          onClose={() => setMostrarModalActualizar(false)}
          ciudad={ciudadSeleccionada}
          onActualizar={handleActualizarCiudad}
        />
      )}
    </div>
  );
};

export default ParamCiudades;
