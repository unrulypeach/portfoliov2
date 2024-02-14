import li from 'assets/LI-In-Bug.png';
import gh from 'assets/github-mark-white.svg';
import gm from 'assets/Gmail_Logo_64px.png';

function ContactTitle() {
  return (
    <div className="desktop:pt-64 desktop:pr-10 desktop:flex-1">
      <div className="">
        <h2 className="title text-center desktop:text-right">Get in touch!</h2>
      </div>
      <div
        className="pt-8 flex flex-col items-center
                      desktop:flex-row desktop:justify-end"
      >
        <a className="my-4 desktop:pl-2 cursor-pointer mr-4" href="https://github.com/unrulypeach/">
          <img className="max-h-[34px]" src={gh} alt="github logo" />
        </a>
        <a
          className="my-4 cursor-pointer mr-4"
          href="https://www.linkedin.com/in/linda-chen-298213297/"
        >
          <img className="max-h-[34px]" src={li} alt="linkedin logo" />
        </a>
        <a
          className="my-4 cursor-pointer mr-4"
          href={`mailto:lindachen.dev@gmail.com?subject=Let's connect`}
        >
          <img className="w-[34px] desktop:w-[45px]" src={gm} alt="gmail logo" />
        </a>
      </div>
    </div>
  );
}

export default ContactTitle;
