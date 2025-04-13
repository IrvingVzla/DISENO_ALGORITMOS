import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ModalAgregarTiposDoc from "./ModalAgregarTiposDoc";
import ModalActualizarTiposDoc from "./ModalActualizarTiposDoc";

const tiposIniciales = [
  {
    id: 1,
    nombre: "Contrato",
    descripcion: "Documento de contrato",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Demanda",
    descripcion: "Documento legal de demanda",
    estado: "Inactivo",
  },
];

const ParamTiposDoc = () => {
  const [tipos, setTipos] = useState(tiposIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [modalCrear, setModalCrear] = useState(false);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);

  const handleAgregar = (nuevo) => {
    const nuevoTipo = {
      ...nuevo,
      id: tipos.length + 1,
    };
    setTipos([...tipos, nuevoTipo]);
  };

  const handleActualizar = (actualizado) => {
    const tiposActualizados = tipos.map((t) =>
      t.id === actualizado.id ? actualizado : t
    );
    setTipos(tiposActualizados);
  };

  const tiposFiltrados = tipos.filter((t) =>
    t.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container py-4">
      <Link to="/PaginaPrincipal" className="text-decoration-none">
        <button className="btn btn-link text-dark mb-3">← Atrás</button>
      </Link>

      <h2 className="fw-bold">Parametrización de Tipos de Documento</h2>

      <div className="d-flex gap-2 mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Buscar tipo documento..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button
          className="btn btn-link p-0"
          style={{ marginLeft: "37rem" }}
          onClick={() => setModalCrear(true)}
        >
          <i className="bi bi-plus-circle fs-3"></i>
        </button>
      </div>

      <table className="table table-bordered text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tiposFiltrados.map((tipo) => (
            <tr key={tipo.id}>
              <td>{tipo.id}</td>
              <td>{tipo.nombre}</td>
              <td>{tipo.descripcion}</td>
              <td>{tipo.estado}</td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-link text-danger p-0"
                    onClick={() =>
                      setTipos(tipos.filter((t) => t.id !== tipo.id))
                    }
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => {
                      setTipoSeleccionado(tipo);
                      setModalActualizar(true);
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

      {/* Modales */}
      <ModalAgregarTiposDoc
        show={modalCrear}
        onHide={() => setModalCrear(false)}
        onGuardar={handleAgregar}
      />

      <ModalActualizarTiposDoc
        show={modalActualizar}
        onHide={() => setModalActualizar(false)}
        tipo={tipoSeleccionado}
        onActualizar={handleActualizar}
      />
    </div>
  );
};

export default ParamTiposDoc;
