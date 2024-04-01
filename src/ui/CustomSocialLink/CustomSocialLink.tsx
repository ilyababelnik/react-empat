import { socialMedia } from 'ui/CustomSocialLink/socialMedia';
import { Link } from 'react-router-dom';
import { ISocialButton } from 'types/ISocialButton';
import style from './CustomSocialLink.module.scss';

const CustomSocialLink: React.FC<ISocialButton> = ({ type }) => {
  const result = socialMedia.find((item) => item.name === type);

  return (
    <Link to={result!.link} className={style.social__link}>
      <img src={result!.image} alt={result!.name} title={result!.name} className={style.social__image} />
    </Link>
  );
};

export default CustomSocialLink;
