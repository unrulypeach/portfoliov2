import NavBar from './NavBar';

function Header() {
  return (
    <div className="flex justify-between pl-8 fixed w-full">
      <a
        href="#home"
        className="btn btn-ghost text-title self-center opacity-50 hover:opacity-100 hover:bg-[#1e2021] rounded-full"
      >
        LC
      </a>
      <NavBar />
    </div>
  );
}

export default Header;
