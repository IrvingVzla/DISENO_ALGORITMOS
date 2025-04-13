import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalAgregarCiudad = ({ show, onClose, onAgregar }) => {
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("activo");

  const handleAgregar = () => {
    if (nombre.trim() === "") return;
    onAgregar({ nombre, estado });
    setNombre("");
    setEstado("Activo");
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Ciudad</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la ciudad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ciudad"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleAgregar}>
          Agregar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAgregarCiudad;
