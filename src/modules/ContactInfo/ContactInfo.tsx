import ContactInformationItem from 'components/ContactInformationItem';
import style from './ContactInfo.module.scss';
import { contacts } from './contacts';

const ContactInfo: React.FC = () => (
  <section className={style.contact__wrapper}>
    <div className={style.wrapper}>
      <div className={style.contact__info_wrapper}>
        {contacts.map((contact) => (
          <ContactInformationItem contact={contact} key={contact.id} />
        ))}
      </div>
    </div>
  </section>
);

export default ContactInfo;
