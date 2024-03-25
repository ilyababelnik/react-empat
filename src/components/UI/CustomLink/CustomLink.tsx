import { Link } from 'react-router-dom';
import style from './CustomLink.module.scss';
import { ICustomLink } from './interface';

const CustomLink: React.FC<ICustomLink> = ({ link, children, classname }) => (
    <Link to={link} className={`${style[classname]}`}>
      {children}
    </Link>
  );

export default CustomLink;
