import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalActualizarCiudad = ({ show, onClose, ciudad, onActualizar }) => {
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("Activo");

  useEffect(() => {
    if (ciudad) {
      setNombre(ciudad.nombre);
      setEstado(ciudad.estado);
    }
  }, [ciudad]);

  const handleActualizar = () => {
    if (nombre.trim() === "") return;
    onActualizar({ id: ciudad.id, nombre, estado });
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Ciudad</Modal.Title>
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
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleActualizar}>
          Actualizar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalActualizarCiudad;
