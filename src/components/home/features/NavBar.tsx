import NavBtn from './NavBtn';

function NavBar() {
  return (
    <div className="flex justify-end py-5 pr-8">
      <NavBtn title="about" />
      <NavBtn title="projects" />
      <NavBtn title="resume" />
      <NavBtn title="contact" />
    </div>
  );
}

export default NavBar;
