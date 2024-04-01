import ItemCard from 'components/ItemCard';
import { advantages } from './advantagesList';
import style from './AdvantageSection.module.scss';

const AdvantageSection: React.FC = () => (
  <section className={style.section_advantages}>
    <h2 className={style.section_advantages__title}>Ми пропонуємо</h2>
    <div className={style.section_advantages__card_wrapper}>
      {advantages.map((advantage) => (
        <ItemCard key={advantage.id} image={advantage.image} title={advantage.title} text={advantage.text} />
      ))}
    </div>
  </section>
);

export default AdvantageSection;
