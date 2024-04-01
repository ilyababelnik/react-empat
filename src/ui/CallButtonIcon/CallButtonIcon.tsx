import CustomLink from 'ui/CustomLink';
import icon from 'assets/UI/call-button.png';
import style from './CallButtonIcon.module.scss';

const CallButtonIcon = () => (
  <CustomLink link="tel:0501112233" classname="secondary_icon">
    <div className={style.icon_wrapper}>
      <img src={icon} alt="Подзвонити" title="Подзвонити" className={style.icon} />
    </div>
  </CustomLink>
);

export default CallButtonIcon;
