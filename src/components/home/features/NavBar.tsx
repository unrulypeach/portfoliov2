import NavBtn from './NavBtn';

function NavBar() {
  return (
    <div className="flex justify-end pt-7 pr-8">
      <NavBtn title="about" />
      <NavBtn title="projects" />
      <NavBtn title="resume" />
      <NavBtn title="contact" />
    </div>
  );
}

export default NavBar;
