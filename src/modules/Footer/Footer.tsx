import CustomLink from 'ui/CustomLink';
import { mainMenuLinks } from 'constants/mainMenuLinks';
import { Link } from 'react-router-dom';
import MapFrame from 'ui/MapFrame';
import CustomNavigationLink from 'ui/CustomNavigationLink';
import SocialButtonsBlock from 'components/SocialButtonsBlock';
import { IFooter } from 'types/IFooter';
import { contacts } from './contacts';
import style from './Footer.module.scss';

const Footer: React.FC<IFooter> = ({ simpleFooterMod = false }) => {
  const width = window.innerWidth;
  return (
    <footer className={style.footer}>
      <div className={style.footer__wrapper_color}>
        <div className={style.footer__wrapper}>
          {simpleFooterMod ? (
            <CustomLink link="/react-empat" classname="secondary">
              Повернутися на голову
            </CustomLink>
          ) : (
            <div className={style.footer__columns}>
              <div className={style.footer__first_column}>
                <CustomLink link="/react-empat/contact" classname="primary">
                  Замовити консультацію
                </CustomLink>
                {width > 729 ? <h4 className={style.footer__motto}>Зробимо спілкування з офіційними органами влади України максимально зручним та зрозумілим.</h4> : false}
                <SocialButtonsBlock />
                {width > 729 ? (
                  <CustomLink link="/react-empat" classname="secondary">
                    Головна сторінка
                  </CustomLink>
                ) : (
                  false
                )}
              </div>
              {width > 1024 ? (
                <div className={style.footer__second_column}>
                  <h3 className={style.footer__title}>Посилання</h3>
                  <nav className={style.footer__nav_link__wrapper}>
                    {mainMenuLinks.map((link) => (
                      <CustomNavigationLink key={link.id} address={link.address} name={link.name} />
                    ))}
                  </nav>
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
                <MapFrame classname="map" />
                {width < 729 ? (
                  <CustomLink link="/react-empat" classname="secondary">
                    Головна сторінка
                  </CustomLink>
                ) : (
                  false
                )}
              </div>
            </div>
          )}
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
