import AboutText from './features/AboutText';
import testimg from '../../../public/moon.webp';
import DonutAnimation from './features/DonutAnimation';

function About() {
  return (
    <div id="about" className="h-screen snap-center bg-[#212429]">
      <div className="flex p-16 h-[inherit]">
        {/* <DonutAnimation /> */}
        <div className="flex-1 pr-4 h-[inherit]">
          <img src={testimg} className="object-cover h-[inherit] pb-32" alt="" />{' '}
        </div>
        <AboutText />
      </div>
    </div>
  );
}

export default About;
