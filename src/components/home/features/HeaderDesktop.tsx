import NavBtn from './NavBtn';
function HeaderDesktop() {
  return (
    <div className={`flex pt-2 fixed items-center justify-between w-full z-20 px-8`}>
      <a
        href="#home"
        className="w-auto btn btn-ghost text-icon rounded-full z-[inherit] text-base leading-4 hover:underline
                 desktop:p-[15px] opacity-50 hover:opacity-100 "
      >
        LC
      </a>
      <div className="flex">
        <NavBtn title="about" toggle={undefined} />
        <NavBtn title="projects" toggle={undefined} />
        <NavBtn title="resume" toggle={undefined} />
        <NavBtn title="contact" toggle={undefined} />
      </div>
    </div>
  );
}

export default HeaderDesktop;
