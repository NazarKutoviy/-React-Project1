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
        </div>
      </div>
    </section>
  );
}
export default SomeSweet;
