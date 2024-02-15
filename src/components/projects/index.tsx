import ProjectCart from './features/ProjectCart';
import ProjectMemory from './features/ProjectMemory';
import ProjectTwit from './features/ProjectTwit';
import ProjectWeather from './features/ProjectWeather';

function Projects() {
  return (
    <div id="projects" className="h-fit px-8 desktop:p-16 desktop:pt-20 bg-bg">
      <div className="h-screen snap-center flex flex-col justify-center">
        <h2 className="title py-8">Featured Projects</h2>
      </div>
      <ProjectTwit />
      <ProjectCart />
      <ProjectMemory />
      <ProjectWeather />
    </div>
  );
}

export default Projects;
