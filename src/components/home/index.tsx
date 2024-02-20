import JumpToTop from 'components/features/JumpToTop';
import Header from './features/Header';
import TitlePathAnim from './features/TitlePathAnim';
import TitleMobile from './features/TitleMobile';
import { useState, useEffect } from 'react';
import HeaderDesktop from './features/HeaderDesktop';

function Home() {
  const [isMoreThan1024, setIsMoreThan1024] = useState(true);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsMoreThan1024(true);
    } else {
      setIsMoreThan1024(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <>
      <JumpToTop />
      <div id="home" className="bg-bg flex flex-col h-screen snap-center">
        {isMoreThan1024 ? <HeaderDesktop /> : <Header />}
        {isMoreThan1024 ? <TitlePathAnim /> : <TitleMobile />}
      </div>
    </>
  );
}

export default Home;
