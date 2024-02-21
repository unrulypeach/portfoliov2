import { useMediaQuery } from 'react-responsive';
import JumpToTop from 'components/features/JumpToTop';
import Header from './features/Header';
import TitlePathAnim from './features/TitlePathAnim';
import TitleMobile from './features/TitleMobile';
import HeaderDesktop from './features/HeaderDesktop';

function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <>
      <JumpToTop />
      <div id="home" className="bg-bg flex flex-col h-screen snap-center">
        {isMobile ? <Header /> : <HeaderDesktop />}
        {isMobile ? <TitleMobile /> : <TitlePathAnim />}
      </div>
    </>
  );
}

export default Home;
