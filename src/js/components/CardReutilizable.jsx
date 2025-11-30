import React from "react";
import CardResponsive from "./CardResponsive";

// CARD REUTILIADA EN FUNCION., IMPORTANDO CARDRESPONSIVE.JSX

export default function CardReutilizable() {
  const cardsData = [
    { imgSrc: "https://images.pexels.com/photos/2158892/pexels-photo-2158892.jpeg", title: "Ninja Mantis", text: "Mantises can rotate their heads almost 180° and strike prey with lightning-fast reflexes, like nature’s own ninja.", btnText: "Explore" },
    { imgSrc: "https://images.pexels.com/photos/29622716/pexels-photo-29622716.jpeg", title: "Scaly Stealth", text: "Some snakes can detect the body heat of their prey and move silently, making them expert hunters.", btnText: "Explore" },
    { imgSrc: "https://images.pexels.com/photos/257552/pexels-photo-257552.jpeg", title: "Master Weaver", text: "Spiders build webs with silk stronger than steel of the same thickness and perfectly sticky.", btnText: "Explore" },
    { imgSrc: "https://images.pexels.com/photos/3180755/pexels-photo-3180755.jpeg", title: "Tiny but Deadly", text: "Poison dart frogs carry potent toxins on their skin, despite their tiny size; nature is full of surprises.", btnText: "Explore" },
  ];

  return (
    <section className="container-fluid py-5">
      <div className="row">
        {cardsData.map((card, idx) => (
          <CardResponsive
            key={idx}
            imgSrc={card.imgSrc}
            title={card.title}
            text={card.text}
            btnText={card.btnText}
          />
        ))}
      </div>
    </section>
  );
}