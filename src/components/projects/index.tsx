import ProjectCart from './features/ProjectCart';
import ProjectMemory from './features/ProjectMemory';
import ProjectTwit from './features/ProjectTwit';
import ProjectWeather from './features/ProjectWeather';

function Projects() {
  return (
    <div id="projects" className="h-fit p-16 bg-black">
      <h2 className="title pb-16">Featured Projects</h2>
      <ProjectTwit />
      <ProjectCart />
      <ProjectMemory />
      <ProjectWeather />
    </div>
  );
}

export default Projects;
