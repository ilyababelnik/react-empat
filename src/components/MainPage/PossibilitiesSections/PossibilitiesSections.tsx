import { possibilities } from 'constants/possibilities';
import CustomLink from 'components/UI/CustomLink';
import style from './PossibilitiesSections.module.scss';
import icon from '/arrow.png';

const PossibilitiesSections: React.FC = () => {
  const width = window.innerWidth;
  return (
    <>
      {width < 380 ? <h2 className={style.section_possibility__main_title}>Послуги</h2> : false}

      {possibilities.map((possibility) => (
        <section key={possibility.id} className={possibility.imageLocation === 'left' ? style.section_possibility__image_left : style.section_possibility__image_right}>
          {width > 620 ? (
            <div className={style.section_possibility__image_wrapper}>
              <img src={possibility.image} alt={possibility.title} title={possibility.title} className={style.section_possibility__image} />
            </div>
          ) : (
            false
          )}
          <div className={style.section_possibility__content_wrapper}>
            <div className={style.section_possibility__content_text}>
              <h2 className={style.section_possibility__title}>{possibility.title}</h2>
              <h4 className={style.section_possibility__text}>{possibility.text}</h4>
            </div>
            {width > 460 ? (
              <CustomLink link={possibility.link} classname="secondary">
                {possibility.linkImage ? (
                  <span className={style.secondary_button__wrapper}>
                    <img src={possibility.linkImage} alt={possibility.linkText} title={possibility.linkText} className={style.secondary_button__image} />
                    <span className={style.secondary_button__text}>{possibility.linkText}</span>
                  </span>
                ) : (
                  possibility.linkText
                )}
              </CustomLink>
            ) : (
              <CustomLink link={possibility.link} classname="secondary-icon">
                <div className={style.section_possibility__icon_wrapper}>
                  <img src={icon} alt={possibility.linkText} title={possibility.linkText} className={style.secondary_possibility__icon} />
                </div>
              </CustomLink>
            )}
          </div>
        </section>
      ))}
    </>
  );
};

export default PossibilitiesSections;
