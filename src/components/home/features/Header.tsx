import NavBar from './NavBar';

function Header() {
  return (
    <div className="flex justify-between pl-8">
      <div className="btn btn-ghost self-end pointer-events-none">LC</div>
      <NavBar />
    </div>
  );
}

export default Header;
