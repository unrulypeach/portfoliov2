function AboutText() {
  return (
    // <div className="flex flex-col flex-1 pl-20">
    <div className="flex flex-col desktop:flex-1 px-12">
      <h2 className="title-sm">About Me</h2>
      <div className="pt-6 text-[#818896]">
        <div className="font-bold ">Linda Chen</div>
        <div>Full Stack Developer</div>
      </div>
      <div className="text-texthov text-sm desktop:text-base desktop:max-w-[500px]">
        <div className="pt-4">
          Hi, I'm a self-taught MERN stack developer. My journey into programming began out of my
          fascination with problem-solving and the efficiency of automating repetitive actions. With
          all that I have learned, I am now able to translate an abundance of abstract concepts into
          real-world applications with code.
        </div>
        <div className="pt-3">
          I look forward to exploring new horizons, embracing new challenges and expanding my
          expertise.
        </div>
        <div className="pt-3">
          I succeeded on this journey through the guidance and resource of the open source
          curriculum,{' '}
          <a className="link link-hover" href="https://www.theodinproject.com/">
            The Odin Project
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default AboutText;
