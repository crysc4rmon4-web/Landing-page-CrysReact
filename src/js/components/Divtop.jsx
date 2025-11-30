import React from "react";

// CAJA DEBAJO DEL NAVBAR, LLAMADA DIVTOP

export default function Divtop() {
  return (
    <section className="container-fluid py-5">
      <div className="card justify-content p-4 border divtop-card">
        <h1 className="card-title">Nature Protocol Activated.</h1>
        <p className="card-text mt-3">
          🌐 Explore an ecosystem where every creature reveals a fascinating fact.⚡
        </p>
        <button className="divtop-btn mt-3 w-25 d-block mx-auto">
         Launch Crysyn <i className="bi bi-exclamation-triangle fs-3"></i>
        </button>
      </div>
    </section>
  );
}
