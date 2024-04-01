import React from 'react';
import { ICustomInput } from 'types/ICustomInput';
import style from './CustomInput.module.scss';

const CustomInput = React.forwardRef(({ type, id, label, placeholder, error, ...props }: ICustomInput, ref: React.Ref<HTMLInputElement>) => (
  <label htmlFor={id} className={style.input__label_wrapper}>
    {label}
    <input className={error ? style.input__error : style.input} type={type} placeholder={placeholder} id={id} ref={ref} {...props} />
    {error ? <p className={style.input__error_message}>{error.message}</p> : false}
  </label>
));

export default CustomInput;
