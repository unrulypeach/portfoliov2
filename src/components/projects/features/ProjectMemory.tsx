import memoryapp from 'assets/project-screenshots/memorycardapp_proper_browser.png';

import { react, eslint, api, newtab } from 'assets/icons';

function ProjectMemory() {
  return (
    <div className="flex my-40 h-full snap-center">
      <div className="flex-1">
        <img className="max-w-[40vw]" src={memoryapp} alt="" />
      </div>
      <div className="flex flex-col px-8 self-center flex-1">
        <h3 className="title">Memory Card Game</h3>
        <div className="flex flex-wrap py-4">
          <div className="badge-styled">
            {react}
            <span className="text-icon">react</span>
          </div>
          <div className="badge-styled">
            {api}
            <span className="text-icon">rapid api</span>
          </div>
          <div className="badge-styled">
            {eslint}
            <span className="text-icon">eslint</span>
          </div>
        </div>
        <div className="pt-4 max-w-[700px] text-icon">
          A memory card game with 5 randomly selected characters from a set. Click on each image
          once as new sets are produced. Avoid clicking on any duplicates to win!
        </div>
        <div className="italic text-sm pb-4 text-icon">
          The game is currently unavailable due to recent changes in RapidAPI, rendering the API
          inaccessible
        </div>
        <div className="py-4">
          <a className="btn-newpg px-8 group" href="https://unrulypeach.github.io/memory-card/">
            Live Demo{newtab}
          </a>
          <a
            className="ml-4 px-10 btn-newpg group"
            href="https://github.com/unrulypeach/memory-card"
          >
            Repo {newtab}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectMemory;
