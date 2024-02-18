import ProjectCart from './features/ProjectCart';
import ProjectMemory from './features/ProjectMemory';
import ProjectTwit from './features/ProjectTwit';
import ProjectWeather from './features/ProjectWeather';
import Title from './features/Title';

function Projects() {
  return (
    <div id="projects" className="h-fit px-8 desktop:p-16 desktop:pt-20 bg-bg">
      <Title />
      <ProjectTwit />
      <ProjectCart />
      <ProjectMemory />
      <ProjectWeather />
    </div>
  );
}

export default Projects;
