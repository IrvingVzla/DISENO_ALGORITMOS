import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css"; // Asegúrate de tener esto para los íconos

const Navbar = ({ children }) => {
  return (
    <div>
      <div className="landing-page">
        <nav
          className="navbar navbar-expand-lg px-4"
          style={{ backgroundColor: "#f3f1ec" }}
        >
          <div className="navbar-brand d-flex align-items-center">
            <img
              src="src/assets/SIGEDOC.png"
              alt="SIGEDOC Logo"
              style={{ height: "40px" }}
            />
          </div>

          <div className="collapse navbar-collapse justify-content-end">
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
                  <a className="dropdown-item" href="#">
                    <Link to="/" className="text-decoration-none text-dark">
                      {" "}
                      <i className="bi bi-question-circle me-2"></i> Ayuda
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <Link to="/" className="text-decoration-none text-dark">
                      {" "}
                      <i className="bi bi-box-arrow-right me-2"></i> Cerrar
                      sesión
                    </Link>
                  </a>
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
