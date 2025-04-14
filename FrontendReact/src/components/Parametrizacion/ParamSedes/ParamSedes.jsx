import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ModalAgregarSede from "./ModalAgregarSede";
import ModalActualizarSede from "./ModalActualizarSede";

const ParamSedes = () => {
  const [sedes, setSedes] = useState([
    {
      id: 1,
      nombre: "Sede Bogota",
      ciudad: "Bogota",
      direccion: "Calle 123",
      estado: "Activo",
      areas: 5,
    },
    {
      id: 2,
      nombre: "Sede Cali",
      ciudad: "Cali",
      direccion: "Carrera 45",
      estado: "Inactivo",
      areas: 3,
    },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [modalAgregarVisible, setModalAgregarVisible] = useState(false);
  const [modalActualizarVisible, setModalActualizarVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    ciudad: "Bogota",
    estado: "Activo",
  });
  const [sedeEditando, setSedeEditando] = useState(null);

  const ciudadesDisponibles = ["Bogota", "Cali", "Medellin", "Barranquilla"];

  const handleGuardar = () => {
    const nuevaSede = {
      ...formData,
      id: sedes.length + 1,
      areas: 0,
    };
    setSedes([...sedes, nuevaSede]);
    setModalAgregarVisible(false);
    resetForm();
  };

  const handleActualizar = () => {
    const sedesActualizadas = sedes.map((s) =>
      s.id === sedeEditando.id ? { ...s, ...formData } : s
    );
    setSedes(sedesActualizadas);
    setModalActualizarVisible(false);
    setSedeEditando(null);
    resetForm();
  };

  const handleEditar = (sede) => {
    setSedeEditando(sede);
    setFormData({
      nombre: sede.nombre,
      direccion: sede.direccion,
      ciudad: sede.ciudad,
      estado: sede.estado,
    });
    setModalActualizarVisible(true);
  };

  const handleEliminar = (id) => {
    setSedes(sedes.filter((t) => t.id !== id));
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      direccion: "",
      ciudad: "Bogota",
      estado: "Activo",
    });
  };

  const sedesFiltradas = sedes.filter((t) =>
    t.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container py-4">
      <Link to="/PaginaPrincipal" className="text-decoration-none">
        <button className="btn btn-link text-dark mb-3">← Atrás</button>
      </Link>

      <h2 className="fw-bold">Panel de Sedes</h2>

      <div className="d-flex gap-2 mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Buscar sede..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <button
          className="btn btn-link p-0 ms-auto"
          onClick={() => setModalAgregarVisible(true)}
        >
          <i className="bi bi-plus-circle fs-3"></i>
        </button>
      </div>

      <table className="table table-bordered text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Estado</th>
            <th>Cant. Áreas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sedesFiltradas.map((sede) => (
            <tr key={sede.id}>
              <td>{sede.id}</td>
              <td>{sede.nombre}</td>
              <td>{sede.direccion}</td>
              <td>{sede.ciudad}</td>
              <td>{sede.estado}</td>
              <td>{sede.areas}</td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-link p-0 text-danger"
                    onClick={() => handleEliminar(sede.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => handleEditar(sede)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalAgregarSede
        show={modalAgregarVisible}
        onHide={() => setModalAgregarVisible(false)}
        formData={formData}
        setFormData={setFormData}
        onGuardar={handleGuardar}
        ciudadesDisponibles={ciudadesDisponibles}
      />

      <ModalActualizarSede
        show={modalActualizarVisible}
        onHide={() => setModalActualizarVisible(false)}
        formData={formData}
        setFormData={setFormData}
        onActualizar={handleActualizar}
        ciudadesDisponibles={ciudadesDisponibles}
      />
    </div>
  );
};

export default ParamSedes;
