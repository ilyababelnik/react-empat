import { IService } from 'types/IService';
import style from './ServiceItem.module.scss';

const ServiceItem: React.FC<IService> = ({ service }) => (
  <div className={style.service}>
    <div className={style.service__image_wrapper}>
      <img src={service.image} alt={service.title} title={service.title} className={style.service__image} />
    </div>
    <h4 className={style.service__title}>{service.title}</h4>
  </div>
);

export default ServiceItem;
