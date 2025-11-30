import React from "react";


// CardResponsive ESTRUCTURA REUTILIZABLE DE UNA CARD

export default function CardResponsive({ imgSrc, title, text, btnText }) {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card feature-card">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <button className="divtop-btn">{btnText}</button>
        </div>
      </div>
    </div>
  );
}