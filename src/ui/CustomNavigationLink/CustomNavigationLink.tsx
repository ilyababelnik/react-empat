import { Link } from 'react-router-dom';
import { ICustomNavigationLink } from 'types/ICustomNavigationLink';
import style from './CustomNavigationLink.module.scss';

const CustomNavigationLink: React.FC<ICustomNavigationLink> = ({ address, name }) => (
  <Link to={address} className={style.link}>
    {name}
  </Link>
);

export default CustomNavigationLink;
