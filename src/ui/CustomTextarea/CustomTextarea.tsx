import React from 'react';
import { ICustomTextArea } from 'types/ICustomTextarea';
import style from './CustomTextarea.module.scss';

const CustomTextarea = React.forwardRef(({ rows, id, label, error, placeholder, ...props }: ICustomTextArea, ref: React.Ref<HTMLTextAreaElement>) => (
  <label htmlFor={id} className={style.textarea__label_wrapper}>
    {label}
    <textarea className={error ? style.textarea__error : style.textarea} rows={rows} placeholder={placeholder} id={id} ref={ref} {...props} />
    {error ? <p className={style.textarea__error_message}>{error.message}</p> : false}
  </label>
));

export default CustomTextarea;
