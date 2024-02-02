import Header from './features/Header';
import Title from './features/Title';

function Home() {
  return (
    <div className="bg-black h-screen flex flex-col justify-between">
      <Header />
      <Title />
    </div>
  );
}

export default Home;
