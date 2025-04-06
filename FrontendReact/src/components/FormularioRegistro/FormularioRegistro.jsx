import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function RegistroForm() {
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-start mb-3">
                <a className="text-decoration-none"><Link to="/">&larr; Atrás</Link></a>
            </div>

            <div className="mx-auto" style={{ maxWidth: "500px" }}>
                <h2 className="fw-bold mb-3">Registrarse en SIGEDOC</h2>
                <p className="text-muted mb-4">
                    Sus datos son necesarios a efectos de la normativa del sector.
                </p>
            </div>

            <form className="mx-auto" style={{ maxWidth: "500px" }}>
                <div className="mb-3">
                    <label className="form-label">Nombre Completo*</label>
                    <input type="text" className="form-control" placeholder="Juan Diego paez" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Documento*</label>
                    <input type="text" className="form-control" placeholder="Digite Documento" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Rol*</label>
                    <select className="form-select">
                        <option value="">Seleccione un rol</option>
                        <option value="radicador">Radicador</option>
                        <option value="gestor">Gestionador</option>
                        <option value="admin">Administrador</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Ciudad*</label>
                    <input type="text" className="form-control" placeholder="Ciudad" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Sede*</label>
                    <select className="form-select">
                        <option value="">Seleccione una sede</option>
                        <option value="sede1">Sede 1</option>
                        <option value="sede2">Sede 2</option>
                    </select>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="terminos" defaultChecked />
                    <label className="form-check-label" htmlFor="terminos">
                        Acepto los términos y condiciones
                    </label>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                    Registrar cuenta
                </button>
            </form>
        </div>
    );
}
