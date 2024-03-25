import CustomLink from 'components/UI/CustomLink';
import CustomSocialLink from 'components/UI/CustomSocialLink';
import { mainMenuLinks } from 'constants/mainMenuLinks';
import { Link } from 'react-router-dom';
import { contacts } from 'constants/contacts';
import MapFrame from 'components/MapFrame';
import CustomNavigationLink from 'components/UI/CustomNavigationLink';
import style from './Footer.module.scss';

const Footer: React.FC = () => {
  const width = window.innerWidth;
  return (
    <footer className={style.footer}>
      <div className={style.footer__wrapper_color}>
        <div className={style.footer__wrapper}>
          <div className={style.footer__columns}>
            <div className={style.footer__first_column}>
              <CustomLink link="/contact" classname="primary">
                Замовити консультацію
              </CustomLink>
              {width > 729 ? <h4 className={style.footer__motto}>Зробимо спілкування з офіційними органами влади України максимально зручним та зрозумілим.</h4> : false}
              <div className={style.footer__social_wrapper}>
                <h3 className={style.footer__title}>Слідуйте за нами</h3>
                <div className={style.footer__social_buttons}>
                  <CustomSocialLink type="LinkedIn" />
                  <CustomSocialLink type="X" />
                  <CustomSocialLink type="Facebook" />
                </div>
              </div>
              {width > 729 ? (
                <CustomLink link="/" classname="secondary">
                  Головна сторінка
                </CustomLink>
              ) : (
                false
              )}
            </div>
            {width > 1024 ? (
              <div className={style.footer__second_column}>
                <h3 className={style.footer__title}>Посилання</h3>
                <div className={style.footer__nav_link__wrapper}>
                  {mainMenuLinks.map((link) => (
                    <CustomNavigationLink key={link.id} address={link.address} name={link.name} />
                  ))}
                </div>
              </div>
            ) : (
              false
            )}
            <div className={style.footer__third_column}>
              {width > 729 ? <h3 className={style.footer__title}>Контакти</h3> : false}
              <div className={style.footer__contact_block}>
                {contacts.map((contact) => (
                  <div className={style.footer__contact_wrapper} key={contact.id}>
                    <div className={style.footer__contact_image_wrapper}>
                      <img src={contact.image} alt={contact.title} title={contact.title} className={style.footer__contact_image} />
                    </div>
                    <Link to={contact.link} className={style.footer__contact_link}>
                      {contact.text}
                    </Link>
                  </div>
                ))}
              </div>
              <MapFrame />
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer__wrapper_text}>
        <h4 className={style.footer__text}>
          {width > 740 ? '© АО «AtoJ. Law Group». Усі права захищені, використання матеріалів сайту заборонено.' : '© АО «AtoJ. Law Group». Усі права захищені.'}
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
