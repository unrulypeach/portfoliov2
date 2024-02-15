import JumpToTop from 'components/features/JumpToTop';
import Header from './features/Header';
import Title from './features/Title';
import TitleMobile from './features/TitleMobile';

function Home() {
  const screenW = window.innerWidth;
  return (
    <>
      <JumpToTop />
      <div id="home" className="bg-bg flex flex-col justify-between h-screen snap-center">
        <Header />
        {screenW > 800 ? <Title /> : <TitleMobile />}
      </div>
    </>
  );
}

export default Home;
