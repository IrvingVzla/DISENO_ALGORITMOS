import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-start mb-3">
                <a className="text-decoration-none"><Link to="/">&larr; Atrás</Link></a>
            </div>

            <div className="mx-auto" style={{ maxWidth: "500px", marginTop: "6rem" }}>
                <h2 className="fw-bold mb-3">Iniciar Sesión</h2>
                <p className="text-muted mb-4">
                    Sus datos son necesarios a efectos de la normativa del sector.
                </p>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Rol</label>
                        <select className="form-select">
                            <option value="">Seleccione un rol</option>
                            <option value="radicador">Radicador</option>
                            <option value="gestor">Gestionador</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="JuanDiegoPaez-rad@sigedoc.co"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Escribir contraseña</label>
                        <input type="password" className="form-control" placeholder="Contraseña" />
                    </div>

                    <Link to="/PaginaPrincipal">
                        <button type="submit" className="btn btn-dark w-100 mb-3">
                            Continuar
                        </button>
                    </Link>


                    <div className="text-center text-muted" style={{ fontSize: "0.9rem" }}>
                        <i className="bi bi-shield-lock"></i> Su información está segura
                    </div>
                </form>
            </div>
        </div>
    );
}