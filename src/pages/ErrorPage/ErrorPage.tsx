import { useEffect } from 'react';
import CustomLink from 'ui/CustomLink';
import style from './ErrorPage.module.scss';

const ErrorPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.wrapper}>
      <section className={style.error__wrapper}>
        <div className={style.error__text}>Сторінку не знайдено</div>
        <div className={style.error__code}>
          <span className={style.error__first_number}>4</span>
          <span className={style.error__second_number}>0</span>
          <span className={style.error__third_number}>4</span>
        </div>
        <CustomLink link="/react-empat" classname="secondary">
          Повернутися на головну
        </CustomLink>
      </section>
    </div>
  );
};

export default ErrorPage;
