import style from './MapFrame.module.scss';

const MapFrame: React.FC = () => (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.585067178481!2d30.516848976097794!3d50.44882898748112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce573295bdcb%3A0x541513fd8d96ce84!2z0LLRg9C70LjRhtGPINCf0YDQvtGA0ZbQt9C90LAsIDgsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1711291154275!5m2!1suk!2sua"
      className={style.map}
      loading="lazy"
      title="Google Maps"
     />
  );

export default MapFrame;
