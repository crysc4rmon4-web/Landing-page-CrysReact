import React from "react";

// Navbar funcional de Bootstrap 5
export default function Navbar() {
  return (
    <header>
      {/* Navbar principal */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">

          {/* Brand / logo a la izquierda */}
          <a className="navbar-brand fw-bold" href="#">
            Crysyn Prime <i class="bi bi-cup-hot-fill"></i>
          </a>

          {/* Botón hamburguesa visible solo cuando colapsa (md o menor) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú que colapsa debajo de lg */}
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
