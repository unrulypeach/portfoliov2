import AboutText from './features/AboutText';

function About() {
  return (
    <div id="about" className="h-screen snap-center bg-[#181818]">
      {/* <div className="flex p-16 pt-24 h-[inherit]"> */}
      <div className="flex h-[inherit] items-center">
        {/* <div className="flex-1 pr-4 h-[inherit]">
          <img src={} className="object-cover h-[inherit] pb-32" alt="" />{' '}
        </div> */}
        <AboutText />
      </div>
    </div>
  );
}

export default About;
