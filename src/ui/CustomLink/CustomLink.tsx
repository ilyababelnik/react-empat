import { Link } from 'react-router-dom';
import { ICustomLink } from 'types/ICustomLink';
import style from './CustomLink.module.scss';

const CustomLink: React.FC<ICustomLink> = ({ link, children, classname }) => (
  <Link to={link} className={`${style[classname]}`}>
    {children}
  </Link>
);

export default CustomLink;
