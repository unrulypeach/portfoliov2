import li from 'assets/LI-In-Bug.png';
import gh from 'assets/github-mark-white.svg';
import gm from 'assets/Gmail_Logo_64px.png';

function ContactTitle() {
  return (
    <div className="pt-48 pr-10 flex-1">
      <div>
        <h2 className="title text-right">Get in touch!</h2>
      </div>
      <div className="pt-8 flex justify-end">
        <a className="pl-2 cursor-pointer mr-4" href="https://github.com/unrulypeach/">
          <img className="max-h-[34px]" src={gh} alt="github logo" />
        </a>
        <a className="cursor-pointer mr-4" href="https://www.linkedin.com/in/linda-chen-298213297/">
          <img className="max-h-[34px]" src={li} alt="linkedin logo" />
        </a>
        <a
          className="cursor-pointer mr-4"
          href={`mailto:lindachen.dev@gmail.com?subject=Let's connect`}
        >
          <img className="max-h-[34px]" src={gm} alt="gmail logo" />
        </a>
      </div>
    </div>
  );
}

export default ContactTitle;
