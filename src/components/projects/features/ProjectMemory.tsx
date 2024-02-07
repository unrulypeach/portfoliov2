import memoryapp from 'assets/project-screenshots/memorycardapp_proper_browser.png';

import { react, eslint, api, newtab } from 'assets/icons';

function ProjectMemory() {
  return (
    <div className="flex my-40">
      <div className="flex-1">
        <img className="max-w-[40vw]" src={memoryapp} alt="" />
      </div>
      <div className="flex flex-col px-8 self-center flex-1">
        <h3 className="title">Memory Card Game</h3>
        <div className="flex flex-wrap py-4">
          <div className="badge gap-2 h-6 mr-2 bg-iconbg">
            {react}
            <span className="text-icon">react</span>
          </div>
          <div className="badge gap-2 h-6 mr-2 bg-iconbg">
            {api}
            <span className="text-icon">rapid api</span>
          </div>
          <div className="badge gap-2 h-6 mr-2 bg-iconbg">
            {eslint}
            <span className="text-icon">eslint</span>
          </div>
        </div>
        <div className="py-4 max-w-[700px]">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which dont look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
          sure there isnt anything embarrassing hidden in the middle of text.
        </div>
        <div className="py-4">
          <a className="btn btn-sm h-10 px-8" href="https://unrulypeach.github.io/memory-card/">
            Live Demo{newtab}
          </a>
          <a
            className="ml-4 px-10 btn btn-sm h-10"
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
