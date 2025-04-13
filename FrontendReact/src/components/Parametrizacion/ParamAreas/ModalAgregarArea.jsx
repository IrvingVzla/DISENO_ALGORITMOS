import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalAgregarArea = ({
  show,
  onHide,
  onAgregar,
  ciudadesDisponibles = [],
  sedesDisponibles = [],
}) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [sede, setSede] = useState("");
  const [estado, setEstado] = useState("Activo");

  const handleGuardar = () => {
    if (!nombre || !ciudad || !sede) return alert("Completa todos los campos");
    onAgregar({ nombre, descripcion, ciudad, sede, estado });
    onHide();
    setNombre("");
    setDescripcion("");
    setCiudad("");
    setSede("");
    setEstado("Activo");
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Área</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre del área</Form.Label>
            <Form.Control
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Ciudad</Form.Label>
            <Form.Select
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            >
              <option value="">Seleccionar ciudad</option>
              {ciudadesDisponibles.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Sede</Form.Label>
            <Form.Select value={sede} onChange={(e) => setSede(e.target.value)}>
              <option value="">Seleccionar sede</option>
              {sedesDisponibles.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleGuardar}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAgregarArea;
