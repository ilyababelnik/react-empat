import HeroSection from 'components/MainPage/HeroSection';
import AdvantageSection from 'components/MainPage/AdvantageSection';
import PossibilitiesSections from 'components/MainPage/PossibilitiesSections';
import RewardsSection from 'components/MainPage/RewardsSection';
import FeedbackSection from 'components/MainPage/FeedbackSection';
import style from './MainPage.module.scss';

const MainPage: React.FC = () => (
    <>
      <div className={style.wrapper}>
        <HeroSection />
        <AdvantageSection />
        <PossibilitiesSections />
      </div>
      <RewardsSection />
      <div className={style.wrapper}>
        <FeedbackSection />
      </div>
    </>
  );

export default MainPage;
