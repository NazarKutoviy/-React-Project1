import React from "react";
import Card from "./Card";
function Torts() {
  const cards = [
    {
      id: "1",
      price: 520,
      title: "Пасхальні капкейки шоколадні та ванільні ",
      subeTitle: "4 варіанти начинок",
      image: "./img/cupcake1.png",
    },
    {
      id: "2",
      price: 520,
      title: "Оригінальні капкейки з кремом та печивом",
      subeTitle: "4 варіанти начинок",
      image: "./img/cupcake2.png",
    },
    {
      id: "3",
      price: 520,
      title: "Капкейки з карамеллю 3 шт",
      subeTitle: "4 варіанти начинок",
      image: "./img/cupcake3.png",
    },
    {
      id: "4",
      price: 520,
      title: "Капкейки з ніжним кремом",
      subeTitle: "4 варіанти начинок",
      image: "./img/cupcake4.png",
    },
    {
      id: "5",
      price: 520,
      title: "Чорні капкейки з шоколадом та печивом",
      subeTitle: "4 варіанти начинок",
      image: "./img/cupcake5.png",
    },
  ];
  return (
    <section className="torts">
      <div className="torts__sliderBox">
        <h2 className="torts__sliderBox__title">Капкейки</h2>
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
