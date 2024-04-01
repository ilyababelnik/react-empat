import closeIcon from 'assets/UI/close-icon.svg';
import { TContactForm } from 'types/TContactForm';
import style from './CloseButton.module.scss';

const CloseButton: React.FC<TContactForm> = ({ setIsOpenModal }) => (
  <button type="button" onClick={() => setIsOpenModal(false)} className={style.button}>
    <img src={closeIcon} className={style.button__image} alt="Close window" title="Close window" />
  </button>
);

export default CloseButton;
