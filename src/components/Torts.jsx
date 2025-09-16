import React from "react";
import Card from "./Card";
function Torts() {
  const cards = [
    {
      id: "1",
      price: 520,
      title: "Торт “Літнє бажання” з шоколадом та макарунами",
      subeTitle: "4 варіанти начинок",
      image: "./img/cake1.png",
    },
    {
      id: "2",
      price: 520,
      title: "Весільний триярусний торт з фруктами та квітами",
      subeTitle: "4 варіанти начинок",
      image: "./img/cake2.png",
    },
    {
      id: "3",
      price: 520,
      title: "Бісквітний торт з ягодами",
      subeTitle: "4 варіанти начинок",
      image: "./img/cake3.png",
    },
    {
      id: "4",
      price: 520,
      title: "Ванільно-карамельний торт з печивом Орео",
      subeTitle: "4 варіанти начинок",
      image: "./img/cake4.png",
    },
    {
      id: "5",
      price: 520,
      title: "Торт рожевий з макарунами",
      subeTitle: "4 варіанти начинок",
      image: "./img/cake5.png",
    },
  ];
  return (
    <section className="torts">
      <div className="torts__sliderBox">
        <h2 className="torts__sliderBox__title">Торти</h2>
        <div className="torts__sliderBox--btnBox">
          <button className="torts__sliderBox--btnBox--btn">
            Переглянути всі
          </button>
          <img
            className="torts__sliderBox--btnBox--slider"
            src="./img/slider.png"
          ></img>
        </div>
      </div>
      <div className="torts__box">
        {cards.map((cake, index) => (
          <Card
            key={index}
            image={cake.image}
            price={cake.price}
            title={cake.title}
            subeTitle={cake.subeTitle}
          />
        ))}
      </div>
    </section>
  );
}
export default Torts;
