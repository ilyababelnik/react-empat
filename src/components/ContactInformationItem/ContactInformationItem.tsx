import { Link } from 'react-router-dom';
import { IContact } from 'types/IContactInformationItem';
import style from './ContactInformationItem.module.scss';

const ContactInformationItem: React.FC<IContact> = ({ contact }) => {
  const width = window.innerWidth;

  return (
    <div className={style[contact.class]}>
      {width > 600 ? (
        <span className={style.title}>{contact.title}: </span>
      ) : (
        <div className={style.image__wrapper}>
          <img src={contact.image} alt={contact.title} title={contact.title} className={style.image} />
        </div>
      )}
      <Link className={style.text} to={contact.link}>
        {contact.text}
      </Link>
    </div>
  );
};

export default ContactInformationItem;
