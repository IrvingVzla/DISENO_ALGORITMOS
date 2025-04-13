import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalActualizarTiposDoc = ({ show, onHide, tipo, onActualizar }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("");

  useEffect(() => {
    if (tipo) {
      setNombre(tipo.nombre);
      setDescripcion(tipo.descripcion);
      setEstado(tipo.estado);
    }
  }, [tipo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onActualizar({ id: tipo.id, nombre, descripcion, estado });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Tipo de Documento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option>Activo</option>
              <option>Inactivo</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Actualizar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalActualizarTiposDoc;
