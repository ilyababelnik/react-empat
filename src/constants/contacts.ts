import phoneIcon from '/phone.svg';
import mailIcon from '/mail.svg';
import locationIcon from '/location.svg';

export const contacts = [
  {
    id: 1,
    image: phoneIcon,
    link: 'tel:0501112233',
    text: '050 111 22 33',
    title: 'Телефон',
  },
  {
    id: 2,
    image: mailIcon,
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=atoj-help@gmail.com',
    text: 'atoj-help@gmail.com',
    title: 'Електронна пошта',
  },
  {
    id: 3,
    image: locationIcon,
    link: 'geo:37.786971,-122.399677;u=35',
    text: 'м. Київ, вул. Прорізна, буд 8',
    title: 'Адреса',
  },
];
