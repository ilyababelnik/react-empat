import { SubmitHandler, useForm } from 'react-hook-form';
import CustomButtonSubmit from 'ui/CustomButtonSubmit';
import CustomInput from 'ui/CustomInput';
import CustomTextarea from 'ui/CustomTextarea';
import { IContactSendMessage } from 'types/IContactSendMessage';
import { TContactForm } from 'types/TContactForm';
import style from './ContactForm.module.scss';

const ContactForm: React.FC<TContactForm> = ({ setIsOpenModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactSendMessage>({
    mode: 'onBlur',
    shouldUseNativeValidation: false,
  });

  const onSubmit: SubmitHandler<IContactSendMessage> = (data) => {
    console.log(data);
    reset();
    setIsOpenModal((prev) => !prev);
  };

  const width = window.innerWidth;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <fieldset className={style.form_wrapper}>
        <div className={style.form_header}>
          <legend className={style.form_title}>Замовити консультацію</legend>
          {width > 1024 ? <p className={style.form_subtitle}>Задайте своє питання і наш консультант з Вами зв&apos;яжеться</p> : <p className={style.form_subtitle}>Поставте своє питання</p>}
        </div>
        <CustomInput
          type="text"
          id="name"
          label="Вкажіть ім'я"
          placeholder="Ваше ім'я"
          error={errors.name}
          {...register('name', {
            required: "Це обов'язкове поле для заповнення",
            minLength: {
              value: 3,
              message: 'Це поле має містити не менше 3-х символів',
            },
            maxLength: {
              value: 30,
              message: 'Це поле має містити не більше 30-ти символів',
            },
            pattern: {
              value: /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ'’` -]+$/,
              message: 'Це поле має містити лише українські літери',
            },
          })}
        />

        <CustomInput
          type="tel"
          id="telephone"
          label="Вкажіть номер телефону"
          placeholder="Контактний номер телефону"
          error={errors.telephone}
          {...register('telephone', {
            required: "Це обов'язкове поле для заповнення",
            minLength: {
              value: 3,
              message: 'Це поле має містити не менше 3-х символів',
            },
            maxLength: {
              value: 15,
              message: 'Це поле має містити не більше 15-ти символів',
            },
            pattern: {
              value: /^\d+$/,
              message: 'Це поле має містити лише цифри',
            },
          })}
        />

        <CustomTextarea
          rows={4}
          placeholder="Питання"
          id="message"
          label="Ваше питання"
          error={errors.message}
          {...register('message', {
            required: "Це обов'язкове поле для заповнення",
            minLength: {
              value: 3,
              message: 'Це поле має містити не менше 3-х символів',
            },
            maxLength: {
              value: 200,
              message: 'Це поле має містити не більше 200 символів',
            },
            pattern: {
              value: /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ'’` -]+$/,
              message: 'Це поле має містити лише українські літери',
            },
          })}
        />

        <CustomButtonSubmit>Надіслати</CustomButtonSubmit>
      </fieldset>
    </form>
  );
};

export default ContactForm;
