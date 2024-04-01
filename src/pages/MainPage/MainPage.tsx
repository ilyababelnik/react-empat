import { useEffect } from 'react';
import HeroSection from 'modules/HeroSection';
import AdvantageSection from 'modules/AdvantageSection';
import PossibilitiesSections from 'modules/PossibilitiesSections';
import RewardsSection from 'modules/RewardsSection';
import FeedbackSection from 'modules/FeedbackSection';
import style from './MainPage.module.scss';

const MainPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
};

export default MainPage;
