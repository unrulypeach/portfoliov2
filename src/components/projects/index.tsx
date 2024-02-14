import ProjectCart from './features/ProjectCart';
import ProjectMemory from './features/ProjectMemory';
import ProjectTwit from './features/ProjectTwit';
import ProjectWeather from './features/ProjectWeather';

function Projects() {
  return (
    <div id="projects" className="h-fit p-16 pt-20 bg-black">
      <div className="h-full snap-center">
        <h2 className="title py-8">Featured Projects</h2>
        <ProjectTwit />
      </div>
      <ProjectCart />
      <ProjectMemory />
      <ProjectWeather />
    </div>
  );
}

export default Projects;
