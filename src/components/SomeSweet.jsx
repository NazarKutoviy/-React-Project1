import { map } from "lodash";

const category = [
  "На день народження",
  "З фруктами",
  "Патріотичні",
  "Для чоловіків",
  "Для весілля",
  "Без глютену",
  "Веганські",
  "Без цукру ",
  "Для дівчат",
  "З квітами",
  "Класичні рецепти",
];
const items = [
  { title: "Торти", img: "img/Rectangle 43.png" },
  { title: "Цукерки", img: "img/Rectangle 43 (1).png" },
  { title: "Капкейки", img: "img/Rectangle 43 (2).png" },
  { title: "Макаруни", img: "img/Rectangle 43 (3).png" },
  { title: "Печиво", img: "img/Rectangle 43 (4).png" },
];

function SomeSweet() {
  return (
    <section className="someSweet">
      <div className="someSweet__container">
        <div className="someSweet__container--box">
          <h1 className="someSweet__container--box--title">
            Пошукаємо щось смачненького?
          </h1>
          <p className="someSweet__container--box--p">
            Ми об’єднали кондитерів з різних міст, щоб необхідні смаколики можна
            було замовити ще легше
          </p>
        </div>
        <label className="someSweet__container--box--label">
          <input className="someSweet__container--label--input" type="text" />
          <button className="someSweet__container--box--label--btn">
            Шукати
          </button>
        </label>

        <div className="someSweet__container--category">
          {category.map((cat, index) => (
            <button className="someSweet__container--category--btn" key={index}>
              {cat}
            </button>
          ))}
          <select className="someSweet__container--category--select">
            <option value="value1">Інші варіанти</option>
          </select>
        </div>
        <div className="someSweet__container--sliderBox">
          <img
            className="someSweet__container--sliderBox--slider"
            src="./img/slider.png"
          ></img>
          <div className="someSweet__container--sliderBox--categoryChoose">
            {items.map((item, index) => (
              <div
                className="someSweet__container--sliderBox--categoryChoose--box"
                key={index}
              >
                <img
                  className="someSweet__container--sliderBox--categoryChoose--box--img"
                  src={item.img}
                ></img>
                <p className="someSweet__container--sliderBox--categoryChoose--box--title">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="someSweet__secondContainer">
        <div className="someSweet__secondContainer--box">
          <img
            className="someSweet__secondContainer--box--imgOne"
            src="./img/slashio-photography-0uBlylsBuWk-unsplash 1.png"
          ></img>
          <img
            className="someSweet__secondContainer--box--imgTwo"
            src="./img/deva-williamson-S2jw81lfrG0-unsplash 1.png"
          ></img>
        </div>
        <img
          className="someSweet__secondContainer--imgThree"
          src="./img/james-coleman-5HR1gItc7Gs-unsplash 1.png"
        ></img>
      </div>
    </section>
  );
}
export default SomeSweet;
