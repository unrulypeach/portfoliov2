import AboutText from './features/AboutText';
import Title from './features/Title';

function About() {
  return (
    <div id="about" className="h-screen snap-center bg-[#181818]">
      {/* <div className="flex p-16 pt-24 h-[inherit]"> */}
      <div className="flex flex-col justify-center desktop:flex-row h-[inherit] items-center">
        <div className="desktop:flex-1 desktop:pl-16 pr-4 desktop:h-[inherit] hidden desktop:flex">
          <Title />
        </div>
        <AboutText />
      </div>
    </div>
  );
}

export default About;
