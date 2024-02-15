import JumpToTop from 'components/features/JumpToTop';
import Header from './features/Header';
import Title from './features/Title';
import TitleMobile from './features/TitleMobile';
import { useState, useEffect } from 'react';

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <>
      <JumpToTop />
      <div id="home" className="bg-bg flex flex-col justify-between h-screen snap-center">
        <Header />
        {isMobile ? <TitleMobile /> : <Title />}
      </div>
    </>
  );
}

export default Home;
