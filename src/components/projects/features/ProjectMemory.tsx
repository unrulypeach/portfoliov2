import memoryapp from 'assets/project-screenshots/memorycardapp_proper_browser.png';

import { react, eslint, api, newtab } from 'assets/icons';

function ProjectMemory() {
  return (
    <div
      className="flex flex-col items-center h-screen py-24 snap-center
                desktop:flex-row"
    >
      <div className="flex-1">
        <img
          className="max-h-[50vh] desktop:max-h-none desktop:max-w-[40vw] desktop:float-right"
          src={memoryapp}
          alt="3 Hearthstone character portraits"
        />
      </div>

      <div className="flex flex-col px-8 self-center flex-1">
        <h3 className="title">Memory Card Game</h3>
        <div className="flex flex-wrap pt-4">
          <div className="badge-styled">
            {react}
            <span className="text-texthov">react</span>
          </div>
          <div className="badge-styled">
            {api}
            <span className="text-texthov">rapid api</span>
          </div>
          <div className="badge-styled">
            {eslint}
            <span className="text-texthov">eslint</span>
          </div>
        </div>
        <div className="py-4 max-w-[600px] text-texthov">
          A memory card game with 5 randomly selected characters from a set. Click on each image
          once as new sets are produced. Avoid clicking on any duplicates to win!
        </div>
        <div className="py-4 flex justify-between desktop:justify-start">
          <a className="btn-newpg px-6 group" href="https://unrulypeach.github.io/memory-card/">
            Live Demo{newtab}
          </a>
          <a
            className="px-6 ml-2 btn-newpg desktop:ml-4 group"
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
