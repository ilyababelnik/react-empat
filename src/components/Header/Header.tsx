import { Link } from 'react-router-dom';
import DesktopMenu from 'components/DesktopMenu';
import { useState } from 'react';
import MobileDeviceMenu from 'components/MobileDeviceMenu';
import style from './Header.module.scss';

const Header: React.FC = () => {
  const width = window.innerWidth;
  const [scroll, setScroll] = useState<boolean>(true);

  return (
    <header className={style.header}>
      <Link to="/">
        <h2 className={style.header__logo}>AtoJ.</h2>
      </Link>
      {width > 1024 ? <DesktopMenu /> : <MobileDeviceMenu scroll={scroll} setScroll={setScroll} />}
    </header>
  );
};

export default Header;
