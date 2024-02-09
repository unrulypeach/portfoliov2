import weatherapp_fs from 'assets/project-screenshots/edited_weatherapp-fullscreen.png';

import { js, api, webpack, newtab } from 'assets/icons';

function ProjectWeather() {
  return (
    <div className="flex h-full my-40 snap-center">
      <div className="flex flex-col px-8 self-center flex-1">
        <h3 className="title">Weather App</h3>
        <div className="flex flex-wrap py-4">
          <div className="badge-styled">
            {js}
            <span className="text-icon">javascript</span>
          </div>
          <div className="badge-styled">
            {webpack}
            <span className="text-icon">webpack</span>
          </div>
          <div className="badge-styled">
            {api}
            <span className="text-icon">openweathermap</span>
          </div>
        </div>
        <div className="py-4 max-w-[700px] text-icon">
          The weather app, built with JavaScript, provides real-time updates on weather conditions
          through OpenWeatherMap. It is set up with Webpack to efficiently deploy and manage
          dependencies.
        </div>
        <div className="py-4">
          <a className="btn-newpg px-8 group" href="https://unrulypeach.github.io/weather-app/">
            Live Demo{newtab}
          </a>
          <a
            className="ml-4 px-10 btn-newpg group"
            href="https://github.com/unrulypeach/weather-app"
          >
            Repo {newtab}
          </a>
        </div>
      </div>
      <div className="flex-1">
        <img className="max-w-[40vw]" src={weatherapp_fs} alt="" />
      </div>
    </div>
  );
}

export default ProjectWeather;
