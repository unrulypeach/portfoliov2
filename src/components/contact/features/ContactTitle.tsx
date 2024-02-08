import li from '../../../assets/LI-In-Bug.png';
import gh from '../../../assets/github-mark-white.svg';
function ContactTitle() {
  return (
    <div className="pt-48 pr-10 flex-1 bg-black">
      <h2 className="title text-right">Get in touch</h2>
      <div className="pt-8 flex justify-end">
        <a className="pl-2 cursor-pointer mr-4" href="https://github.com/unrulypeach/">
          <img className="max-h-[34px]" src={gh} alt="github logo" />
        </a>
        <a className="cursor-pointer mr-4" href="https://www.linkedin.com/in/linda-chen-298213297/">
          <img className="max-h-[34px]" src={li} alt="linkedin logo" />
        </a>
      </div>
    </div>
  );
}

export default ContactTitle;
