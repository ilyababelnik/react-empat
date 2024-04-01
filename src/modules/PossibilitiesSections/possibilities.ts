import counsellingImage from 'assets/possibilities/counselling.png';
import specializationImage from 'assets/possibilities/specialization.png';
import applicationImage from 'assets/possibilities/application.png';
import appleImage from 'assets/UI/apple.png';

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
