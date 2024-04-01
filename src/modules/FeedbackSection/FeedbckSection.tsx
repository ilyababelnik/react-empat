import ItemCard from 'components/ItemCard';
import { feedbacks } from './feedbacks';
import style from './FeedbackSection.module.scss';

const FeedbackSection: React.FC = () => {
  const width = window.innerWidth;
  return (
    <section className={style.feedback}>
      <h2 className={style.feedback__title}>Відгуки про нас</h2>
      <div className={style.feedback__wrapper}>
        {feedbacks.map((feedback) => {
          if (width <= 1024 && feedback.id % 3 !== 0) {
            return <ItemCard key={feedback.id} image={feedback.image} title={feedback.name} text={feedback.text} location />;
          }
          if (width > 1024) {
            return <ItemCard key={feedback.id} image={feedback.image} title={feedback.name} text={feedback.text} />;
          }
          return false;
        })}
      </div>
    </section>
  );
};

export default FeedbackSection;
