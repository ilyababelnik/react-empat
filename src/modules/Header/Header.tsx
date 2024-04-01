import { useState } from 'react';
import DesktopMenu from 'components/DesktopMenu';
import MobileDeviceMenu from 'components/MobileDeviceMenu';
import Logo from 'ui/Logo';
import style from './Header.module.scss';

const Header: React.FC = () => {
  const width = window.innerWidth;
  const [scroll, setScroll] = useState<boolean>(true);

  return (
    <header className={style.header}>
      <Logo />
      {width > 1024 ? <DesktopMenu /> : <MobileDeviceMenu scroll={scroll} setScroll={setScroll} />}
    </header>
  );
};

export default Header;
