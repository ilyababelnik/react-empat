import { IItemCard } from 'types/IItemCard';
import style from './ItemCard.module.scss';

const ItemCard: React.FC<IItemCard> = ({ image, title, text, location = false }) => (
  <div className={location ? style.card_feedback : style.card}>
    <div className={style.card__image_wrapper}>
      <img src={image} alt={title} title={title} className={style.card__image} />
    </div>
    <div className={style.card__text_wrapper}>
      <h3 className={style.card__title}>{title}</h3>
      <p className={style.card__text}>{text}</p>
    </div>
  </div>
);

export default ItemCard;
