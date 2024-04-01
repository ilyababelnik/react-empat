import { mainMenuLinks } from 'constants/mainMenuLinks';
import CustomLink from 'ui/CustomLink';
import CustomNavigationLink from 'ui/CustomNavigationLink';
import style from './DesktopMenu.module.scss';

const DesktopMenu: React.FC = () => (
  <div className={style.header__menu_wrapper}>
    <nav className={style.nav}>
      {mainMenuLinks.map((link) => (
        <CustomNavigationLink key={link.id} address={link.address} name={link.name} />
      ))}
    </nav>
    <CustomLink link="tel:0501112233" classname="secondary">
      Подзвонити
    </CustomLink>
  </div>
);

export default DesktopMenu;
