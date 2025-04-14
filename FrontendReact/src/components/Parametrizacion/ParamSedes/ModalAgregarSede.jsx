import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const estados = ["Activo", "Inactivo"];

const ModalAgregarSede = ({
  show,
  onHide,
  formData,
  setFormData,
  onGuardar,
  ciudadesDisponibles,
}) => {
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Sede</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={formData.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              value={formData.direccion}
              onChange={(e) => handleChange("direccion", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ciudad</Form.Label>
            <Form.Select
              value={formData.ciudad}
              onChange={(e) => handleChange("ciudad", e.target.value)}
            >
              {ciudadesDisponibles.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Estado</Form.Label>
            <Form.Select
              value={formData.estado}
              onChange={(e) => handleChange("estado", e.target.value)}
            >
              {estados.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={onGuardar}>
          Agregar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAgregarSede;
