import profile_bob from 'assets/project-screenshots/edited_twitter_profile_bobross.png';
import signup from 'assets/project-screenshots/edited_twitter_signup.png';

import { react, typescript, mongodb, express, nodejs, newtab } from 'assets/icons';
import { useState } from 'react';

function ProjectTwit() {
  const slides = [profile_bob, signup];
  const [slide, setSlide] = useState(slides[0]);
  function nextSlide() {
    const currSlideInd = slides.findIndex((el) => el === slide);
    if (currSlideInd === slides.length - 1) {
      return setSlide(slides[0]);
    }
    setSlide(slides[currSlideInd + 1]);
  }
  function prevSlide() {
    const currSlideInd = slides.findIndex((el) => el === slide);
    if (currSlideInd === 0) {
      return setSlide(slides[slides.length - 1]);
    }
    setSlide(slides[currSlideInd - 1]);
  }

  setTimeout(nextSlide, 2500);

  return (
    <div
      className="flex flex-col items-center h-screen py-24 snap-center
                desktop:flex-row"
    >
      <div className="flex-1">
        <div className="relative max-h-[50vh] desktop:float-right desktop:max-h-none desktop:max-w-[40vw]">
          <img className="max-h-[inherit]" src={slide} alt="rotating images of twitter replica" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-1/2">
            <button
              className="btn btn-circle bg-black border-none opacity-20 hover:opacity-90 hover:bg-black"
              onClick={() => prevSlide()}
            >
              <span className="text-title">❮</span>
            </button>
            <button
              className="btn btn-circle bg-black border-none opacity-20 hover:opacity-90 hover:bg-black"
              onClick={() => nextSlide()}
            >
              <span className="text-title">❯</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-8 self-center flex-1">
        <h3 className="title">Twitter Replicate</h3>
        <div className="flex flex-wrap pt-4">
          <div className="badge-styled">
            {react}
            <span className="text-texthov">react</span>
          </div>
          <div className="badge-styled">
            {typescript}
            <span className="text-texthov">typescript</span>
          </div>
          <div className="badge-styled">
            {nodejs}
            <span className="text-texthov">node.js</span>
          </div>
          <div className="badge-styled">
            {mongodb}
            <span className="text-texthov">mongodb</span>
          </div>
          <div className="badge-styled">
            {express}
            <span className="text-texthov">express</span>
          </div>
        </div>
        <div className="py-4 max-w-[600px] text-texthov">
          A full-stack clone of Twitter with a meticulously replicated UI. It has a dedicated API
          endpoint and uses MongoDB for its database. Users can create an account, create posts,
          replies, follow users, and like posts!
        </div>
        <div className="py-4 flex justify-between desktop:justify-start">
          <a className="btn-newpg px-6 group" href="https://twitter-replica-orpin.vercel.app/">
            Live Demo{newtab}
          </a>
          <a
            className="px-6 ml-2 btn-newpg desktop:ml-4 group"
            href="https://github.com/unrulypeach/twitter-replica"
          >
            Repo {newtab}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectTwit;
