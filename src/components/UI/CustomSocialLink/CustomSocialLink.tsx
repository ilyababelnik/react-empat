import { socialMedia } from 'constants/socialMedia';
import { Link } from 'react-router-dom';
import style from './CustomSocialLink.module.scss';
import { ICustomSocialLink } from './interface';

const CustomSocialLink: React.FC<ICustomSocialLink> = ({ type }) => {
  const result = socialMedia.find((item) => item.name === type);

  return (
    <Link to={result!.link} className={style.social__link}>
      <img src={result!.image} alt={result!.name} title={result!.name} className={style.social__image} />
    </Link>
  );
};

export default CustomSocialLink;
