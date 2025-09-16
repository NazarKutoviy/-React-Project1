
function Card({ image, price, title, subeTitle }) {
  return (
    <article className="torts__box--card">
      <img className="torts__box--card__image" src={image} />
      <p className="torts__box--card__price">{price} грн</p>
      <h4 className="torts__box--card__title">{title}</h4>
      <p className="torts__box--card__subeTitle">{subeTitle}</p>
    </article>
  );
}

export default Card;
