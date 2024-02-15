import weatherapp_fs from 'assets/project-screenshots/edited_weatherapp-fullscreen.png';

import { js, api, webpack, newtab } from 'assets/icons';

function ProjectWeather() {
  return (
    <div
      className="flex flex-col items-center h-screen py-24 snap-center
                desktop:flex-row"
    >
      <div className="flex-1 desktop:order-2">
        <img
          className="max-h-[50vh] desktop:max-h-none desktop:max-w-[40vw]"
          src={weatherapp_fs}
          alt="gameboy style weather report"
        />
      </div>

      <div className="flex flex-col px-8 self-center flex-1">
        <h3 className="title">Weather App</h3>
        <div className="flex flex-wrap pt-4">
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
        <div className="py-4 flex justify-between desktop:justify-start">
          <a className="btn-newpg px-6 group" href="https://unrulypeach.github.io/weather-app/">
            Live Demo{newtab}
          </a>
          <a
            className="px-6 ml-2 btn-newpg desktop:ml-4 group"
            href="https://github.com/unrulypeach/weather-app"
          >
            Repo {newtab}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectWeather;
