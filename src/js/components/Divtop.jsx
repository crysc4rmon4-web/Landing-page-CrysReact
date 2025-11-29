import React from "react";

export default function Divtop() {
  return (
    <section className="container-fluid py-5">
      <div className="card justify-content p-4 border divtop-card">
        <h1 className="card-title">Sync Complete.</h1>
        <p className="card-text mt-3">
          🌐 Main system area: where your idea takes shape and turns into impact.⚡
        </p>
        <button className="divtop-btn mt-3 w-50 d-block mx-auto">
          Activar Crysyn <i className="bi bi-exclamation-triangle"></i>
        </button>
      </div>
    </section>
  );
}
