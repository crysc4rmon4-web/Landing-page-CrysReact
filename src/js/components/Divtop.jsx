import React from "react";

export default function Divtop() {
  return (
    <section className="container-fluid py-5">
      <div className="card justify-content p-4 border">
        <h1 className="card-title">Sync Complete.</h1>
        <p className="card-text mt-3">
          Zona principal del sistema: donde tu idea toma forma y se convierte en impacto.
        </p>
        <button className="btn btn-warning mt-3 w-50 d-block mx-auto" >Activar Crysyn <i class="bi bi-exclamation-triangle"></i></button>
      </div>
    </section> 
  );
}
