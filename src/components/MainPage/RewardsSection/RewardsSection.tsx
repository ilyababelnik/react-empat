import { rewards } from 'constants/rewards';
import style from './RewardsSection.module.scss';

const RewardsSection: React.FC = () => (
    <section className={style.section_rewards}>
      <div className={style.wrapper}>
        <h2 className={style.section_rewards__title}>Наші досягнення</h2>
        <div className={style.section_rewards__list}>
          {rewards.map((reward) => (
            <div className={style.section_rewards__image_wrapper} key={reward.id}>
              <img src={reward.image} alt={reward.title} title={reward.title} className={style.section_rewards__image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

export default RewardsSection;
