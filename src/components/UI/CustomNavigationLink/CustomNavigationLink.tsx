import { Link } from 'react-router-dom';
import style from './CustomNavigationLink.module.scss';
import { ICustomNavigationLink } from './interface';

const CustomNavigationLink: React.FC<ICustomNavigationLink> = ({ address, name }) => (
    <Link to={address} className={style.link}>
      {name}
    </Link>
  );

export default CustomNavigationLink;
