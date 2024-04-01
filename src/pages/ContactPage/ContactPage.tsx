import { useEffect, useState } from 'react';
import MapFrame from 'ui/MapFrame';
import ContactForm from 'modules/ContactForm';
import SocialButtonsBlock from 'components/SocialButtonsBlock';
import ModalWindow from 'components/ModalWindow';
import ContactInfo from 'modules/ContactInfo';
import style from './ContactPage.module.scss';

const ContactPage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ModalWindow isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      <div className={style.wrapper}>
        <h1 className={style.contact__page_title}>Зв&apos;яжіться з нами</h1>
      </div>
      <ContactInfo />
      <div className={style.wrapper}>
        <div className={style.contact__columns_wrapper}>
          <section className={style.contact__form}>
            <ContactForm setIsOpenModal={setIsOpenModal} />
          </section>
          <div className={style.contact__second_column}>
            <section className={style.contact__map}>
              <MapFrame classname="contact__map" />
            </section>
            <section className={style.contact__social}>
              <SocialButtonsBlock />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
