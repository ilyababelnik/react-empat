import { ReactNode, memo } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import style from './Layout.module.scss';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className={style.wrapper}>
    <Header />
    <main className={style.main}>{children}</main>
    <Footer />
  </div>
);

export default memo(Layout);
