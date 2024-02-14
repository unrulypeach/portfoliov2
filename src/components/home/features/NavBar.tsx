import NavBtn from './NavBtn';

function NavBar({ setShowMenu }: { setShowMenu: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    // <div className="flex justify-end py-5 pr-8">
    <div
      className="flex flex-col items-center w-full
                desktop:w-auto desktop:flex-row desktop:pr-8"
    >
      <NavBtn title="about" setShowMenu={setShowMenu} />
      <NavBtn title="projects" setShowMenu={setShowMenu} />
      <NavBtn title="resume" setShowMenu={setShowMenu} />
      <NavBtn title="contact" setShowMenu={setShowMenu} />
    </div>
  );
}

export default NavBar;
