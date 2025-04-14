import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className="landing-page">
        <nav
          className="navbar navbar-expand-lg px-4"
          style={{ backgroundColor: "#f3f1ec" }}
        >
          <div className="container-fluid d-flex align-items-center">
            {/* Logo alineado a la izquierda */}
            <div className="navbar-brand">
              <img
                src="src/assets/SIGEDOC.png"
                alt="SIGEDOC Logo"
                style={{ height: "40px" }}
              />
            </div>

            {/* Menú centrado */}
            <div className="d-flex justify-content-center flex-grow-1">
              <ul className="navbar-nav" style={{ marginRight: "11%" }}>
                <li className="nav-item mx-2">
                  <Link to="#" className="nav-link text-dark fw-semibold">
                    Gestión Documental
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    to="/PaginaPrincipal"
                    className="nav-link text-dark fw-semibold"
                  >
                    Parametrización
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="#" className="nav-link text-dark fw-semibold">
                    Reportes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Menú de usuario alineado a la derecha */}
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle text-primary"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle fs-5 text-primary"></i>
              </button>

              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <Link to="/" className="dropdown-item text-dark">
                    <i className="bi bi-question-circle me-2"></i> Ayuda
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item text-dark">
                    <i className="bi bi-box-arrow-right me-2"></i> Cerrar sesión
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
};

export default Navbar;
