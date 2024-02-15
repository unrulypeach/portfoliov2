import JumpToTop from 'components/features/JumpToTop';
import Header from './features/Header';
import Title from './features/Title';

function Home() {
  return (
    <>
      <JumpToTop />
      <div id="home" className="bg-bg flex flex-col justify-between h-screen snap-center">
        <Header />
        <Title />
      </div>
    </>
  );
}

export default Home;
