import { useRef } from 'react';
import { mainMenuLinks } from 'constants/mainMenuLinks';
import { Link } from 'react-router-dom';
import { IMobileDeviceMenu } from 'types/IMobileDeviceMenu';
import CallButtonText from 'ui/CallButtonText';
import CallButtonIcon from 'ui/CallButtonIcon';
import style from './MobileDeviceMenu.module.scss';

const MobileDeviceMenu: React.FC<IMobileDeviceMenu> = ({ scroll, setScroll }) => {
  const width = window.innerWidth;
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleMobileClickMenu = () => {
    const overlayElement = overlayRef.current;
    const buttonElement = buttonRef.current;
    if (buttonElement) {
      buttonElement.classList.toggle(style.active);
    }
    if (overlayElement) {
      overlayElement.classList.toggle(style.open);
    }
    setScroll(!scroll);
    if (scroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleLinkClick = () => {
    const overlayElement = overlayRef.current;
    const buttonElement = buttonRef.current;

    if (buttonElement) {
      buttonElement.classList.toggle(style.active);
    }

    if (overlayElement) {
      overlayElement.classList.remove(style.open);
    }
    setScroll(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {width > 460 ? <CallButtonText /> : <CallButtonIcon />}

      <button type="button" className={style.nav__burger_wrapper} onClick={handleMobileClickMenu} ref={buttonRef}>
        <div className={style.nav__burger_first} />
        <div className={style.nav__burger_second} />
        <div className={style.nav__burger_third} />
      </button>
      <div className={style.overlay} ref={overlayRef}>
        <nav className={style.mobile_menu}>
          <ul>
            {mainMenuLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.address} className={style.nav__link} onClick={handleLinkClick}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileDeviceMenu;
