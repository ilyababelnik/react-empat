import { memo } from 'react';
import Header from 'modules/Header';
import Footer from 'modules/Footer';
import { ILayout } from 'types/ILayout';
import style from './Layout.module.scss';

const Layout: React.FC<ILayout> = ({ children, simpleFooterMod = false }) => (
  <div className={style.wrapper}>
    <Header />
    <main className={style.main}>{children}</main>
    <Footer simpleFooterMod={simpleFooterMod} />
  </div>
);

export default memo(Layout);
