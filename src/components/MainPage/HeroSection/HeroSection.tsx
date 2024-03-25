import CustomLink from 'components/UI/CustomLink';
import style from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  const width = window.innerWidth;
  return (
    <section className={style.hero}>
      <div className={style.hero__content_wrapper}>
        <div className={style.hero__text_wrapper}>
          <h1 className={style.hero__title}>
            Aдвокатське об’єднання
            <strong className={style.hero__title_company}> AtoJ. Law Group</strong>
          </h1>
          <h3 className={style.hero__subtitle}>Професійні юридичні та адвокатські послуги.</h3>
          {width > 500 ? <h4 className={style.hero__motto}>Орієнтиром нашої діяльності є права, свободи та законні інтереси наших клієнтів.</h4> : false}
        </div>
        <CustomLink link="/contact" classname="primary">
          Замовити консультацію
        </CustomLink>
      </div>
    </section>
  );
};

export default HeroSection;
