import { useEffect } from 'react';
import ServiceItem from 'components/ServiceItem';
import style from './ServicesPage.module.scss';
import { services } from './services';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const width = window.innerWidth;
  return (
    <div className={style.wrapper}>
      <section className={style.services}>
        <div className={style.services__header}>
          <h1 className={style.services__title}>Наші послуги</h1>
          <h3 className={style.services__subtitle}>{width > 376 ? 'Оберіть актуальну для Вас категорію справи' : 'Оберіть актуальну категорію справи'}</h3>
        </div>
        <div className={style.services__wrapper}>
          {services.map((service) => (
            <ServiceItem service={service} key={service.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
