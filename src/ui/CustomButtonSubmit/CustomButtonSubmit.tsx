import { ICustomButtonSubmit } from 'types/ICustomButtonSubmit';
import style from './CustomButtonSubmit.module.scss';

const CustomButtonSubmit: React.FC<ICustomButtonSubmit> = ({ children }) => (
  <button type="submit" className={style.button}>
    {children}
  </button>
);

export default CustomButtonSubmit;
