import phoneIcon from 'assets/contacts/phone.svg';
import mailIcon from 'assets/contacts/mail.svg';
import locationIcon from 'assets/contacts/address.svg';

export const contacts = [
  {
    id: 1,
    image: phoneIcon,
    link: 'tel:0501112233',
    text: '050 111 22 33',
    title: 'Телефон',
    class: 'telephone',
  },
  {
    id: 2,
    image: mailIcon,
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=atoj-help@gmail.com',
    text: 'atoj-help@gmail.com',
    title: 'E-mail',
    class: 'mail',
  },
  {
    id: 3,
    image: locationIcon,
    link: 'geo:37.786971,-122.399677;u=35',
    text: 'м. Київ, вул. Прорізна, буд 8',
    title: 'Адреса',
    class: 'address',
  },
];
