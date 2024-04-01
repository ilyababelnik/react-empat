import CustomSocialLink from 'ui/CustomSocialLink';
import style from './SocialButtonsBlock.module.scss';

const SocialButtonsBlock: React.FC = () => (
  <div className={style.social__wrapper}>
    <h3 className={style.social__title}>Слідуйте за нами</h3>
    <div className={style.social__buttons}>
      <CustomSocialLink type="LinkedIn" />
      <CustomSocialLink type="X" />
      <CustomSocialLink type="Facebook" />
    </div>
  </div>
);

export default SocialButtonsBlock;
