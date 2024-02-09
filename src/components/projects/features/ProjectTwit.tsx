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
    <div className="flex mb-40">
      <div className="flex-1">
        <div className="max-w-[40vw]">
          <div className="relative">
            <img src={slide} alt="" />
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
      </div>
      <div className="flex flex-col px-8 self-center flex-1">
        <h3 className="title">Twitter Replicate</h3>
        <div className="flex flex-wrap py-4">
          <div className="badge-styled">
            {react}
            <span className="text-icon">react</span>
          </div>
          <div className="badge-styled">
            {typescript}
            <span className="text-icon">typescript</span>
          </div>
          <div className="badge-styled">
            {mongodb}
            <span className="text-icon">mongodb</span>
          </div>
          <div className="badge-styled">
            {express}
            <span className="text-icon">express</span>
          </div>
          <div className="badge-styled">
            {nodejs}
            <span className="text-icon">node.js</span>
          </div>
        </div>
        <div className="py-4 max-w-[700px] text-icon">
          A full-stack clone of Twitter with a meticulously replicated UI. Initially developed with
          Firebase for the backend, an API endpoint was later created along with using MongoDB for a
          database. Users can create an account, create posts, replies, follow users, and like
          posts!
        </div>
        <div className="py-4">
          <a className="btn-newpg px-8 group" href="https://twitter-replica-orpin.vercel.app/">
            Live Demo{newtab}
          </a>
          <a
            className="ml-4 px-10 btn-newpg group"
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
