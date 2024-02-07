import profile_bob from 'assets/project-screenshots/edited_twitter_profile_bobross.png';
import signup from 'assets/project-screenshots/edited_twitter_signup.png';

import { react, typescript, mongodb, express, nodejs, newtab } from 'assets/icons';

function ProjectTwit() {
  return (
    <div className="flex my-40">
      <div className="flex-1">
        <div className="max-w-[40vw]">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={profile_bob} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-1/2">
                <a href="#slide2" className="btn btn-circle opacity-20 hover:opacity-90">
                  <span>❮</span>
                </a>
                <a href="#slide2" className="btn btn-circle opacity-20 hover:opacity-90">
                  <span>❯</span>
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={signup} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-1/2">
                <a href="#slide1" className="btn btn-circle opacity-20 hover:opacity-90">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle opacity-20 hover:opacity-90">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-8 self-center flex-1">
        <h3 className="title">Twitter Replicate</h3>
        <div className="flex flex-wrap py-4">
          <div className="badge gap-2 h-6 mr-2 bg-iconbg">
            {react}
            <span className="text-icon">react</span>
          </div>
          <div className="badge gap-2 h-6 mr-2 bg-iconbg">
            {typescript}
            <span className="text-icon">typescript</span>
          </div>
          <div className="badge gap-2 h-6 mr-2 bg-iconbg">
            {mongodb}
            <span className="text-icon">mongodb</span>
          </div>
          <div className="badge gap-2 h-6 mr-2 bg-iconbg">
            {express}
            <span className="text-icon">express</span>
          </div>
          <div className="badge gap-2 h-6 mr-2 bg-iconbg">
            {nodejs}
            <span className="text-icon">node.js</span>
          </div>
        </div>
        <div className="py-4 max-w-[700px]">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which dont look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
          sure there isnt anything embarrassing hidden in the middle of text.
        </div>
        <div className="py-4">
          <a className="btn btn-sm h-10 px-8" href="https://twitter-replica-orpin.vercel.app/">
            Live Demo{newtab}
          </a>
          <a
            className="ml-4 px-10 btn btn-sm h-10"
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
