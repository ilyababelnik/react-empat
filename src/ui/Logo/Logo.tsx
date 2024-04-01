import { Link } from 'react-router-dom';
import style from './Logo.module.scss';

const Logo: React.FC = () => (
  <Link to="/">
    <h2 className={style.logo}>AtoJ.</h2>
  </Link>
);

export default Logo;
