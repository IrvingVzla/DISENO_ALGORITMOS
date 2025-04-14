import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ModalAgregarArea from "./ModalAgregarArea";
import ModalActualizarArea from "./ModalActualizarArea";

const ciudades = [
  {
    id: 1,
    nombre: "Juridica",
    ciudad: "Bogota",
    sede: "Sede Bogota",
    descripcion: "Legal",
    activo: true,
  },
  {
    id: 2,
    nombre: "Recursos Humanos",
    ciudad: "Cali",
    sede: "Sede Cali",
    descripcion: "RRHH",
    activo: false,
  },
];

const ParamAreas = () => {
  const [tipos, setAreas] = useState(ciudades);
  const [busqueda, setBusqueda] = useState("");
  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [areaSeleccionada, setAreaSeleccionada] = useState(null);

  const tiposFiltrados = tipos.filter((t) =>
    t.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleAgregar = (nuevaArea) => {
    setAreas([
      ...tipos,
      {
        ...nuevaArea,
        id: tipos.length + 1,
        activo: nuevaArea.estado === "Activo",
      },
    ]);
  };

  const handleActualizar = (areaActualizada) => {
    const nuevasAreas = tipos.map((a) =>
      a.id === areaActualizada.id
        ? { ...areaActualizada, activo: areaActualizada.estado === "Activo" }
        : a
    );
    setAreas(nuevasAreas);
  };

  return (
    <div className="container py-4">
      <Link to="/PaginaPrincipal" className="text-decoration-none">
        <button className="btn btn-link text-dark mb-3">← Atrás</button>
      </Link>

      <h2 className="fw-bold">Bienvenido al Panel de Áreas</h2>

      <div className="d-flex gap-2 mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Buscar Área..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <button
          className="btn btn-link p-0 ms-auto"
          onClick={() => setModalAgregar(true)}
        >
          <i className="bi bi-plus-circle fs-3"></i>
        </button>
      </div>

      <table className="table table-bordered text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Ciudad</th>
            <th>Sede</th>
            <th>Activo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tiposFiltrados.map((tipo) => (
            <tr key={tipo.id}>
              <td>{tipo.id}</td>
              <td>{tipo.nombre}</td>
              <td>{tipo.ciudad}</td>
              <td>{tipo.sede}</td>
              <td>{tipo.activo ? "Activo" : "Inactivo"}</td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-link p-0 text-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => {
                      setAreaSeleccionada({
                        ...tipo,
                        estado: tipo.activo ? "Activo" : "Inactivo",
                      });
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

      <ModalAgregarArea
        show={modalAgregar}
        onHide={() => setModalAgregar(false)}
        onAgregar={handleAgregar}
        ciudadesDisponibles={[...new Set(tipos.map((t) => t.ciudad))]}
        sedesDisponibles={[...new Set(tipos.map((t) => t.sede))]}
      />

      <ModalActualizarArea
        show={modalActualizar}
        onHide={() => setModalActualizar(false)}
        area={areaSeleccionada}
        onActualizar={handleActualizar}
        ciudadesDisponibles={[...new Set(tipos.map((t) => t.ciudad))]}
        sedesDisponibles={[...new Set(tipos.map((t) => t.sede))]}
      />
    </div>
  );
};

export default ParamAreas;
