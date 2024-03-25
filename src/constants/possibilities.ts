import counsellingImage from '/counselling.png';
import specializationImage from '/specialization.png';
import applicationImage from '/application.png';
import appleImage from '/apple.png';

export const possibilities = [
  {
    id: 1,
    image: counsellingImage,
    imageLocation: 'left',
    title: 'Професійна консультація',
    text: 'Наші консультанти 24/7 приймають дзвінки. \nВони швидко та професійно нададуть перші поради, як діяти у ситуації та скоординують з Вашим потенційним адвокатом.',
    linkText: 'Замовити консультацію',
    linkImage: '',
    link: '/contact',
  },
  {
    id: 2,
    image: specializationImage,
    imageLocation: 'right',
    title: 'Адвокати широкої спеціалізації',
    text: 'Пропонуємо Вам ознайомитися з нашою висококваліфікованою командою адвокатів та домовитися про першу зустріч з потрібним фахівцем.',
    linkText: 'Подивитися спеціалістів',
    linkImage: '',
    link: '#',
  },
  {
    id: 3,
    image: applicationImage,
    imageLocation: 'left',
    title: 'Зручний мобільний додаток',
    text: 'Самостійно складайте офіційні документи у декілька кліків.',
    linkText: 'App Store',
    linkImage: appleImage,
    link: '#',
  },
];
