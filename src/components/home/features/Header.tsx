import { useState } from 'react';
import NavBar from './NavBar';
import { menu } from 'assets/icons';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    // <div className="pl-8 fixed w-full">
    <div className="fixed">
      <button className="p-4 desktop:hidden" onClick={() => setShowMenu(!showMenu)}>
        {menu}
      </button>
      <div
        className={`mt-8 bg-black relative w-screen h-screen flex flex-col items-center
                    desktop:flex-row desktop:justify-between desktop:bg-transparent desktop:h-auto
                    desktop:pl-8 ${showMenu ? 'block' : 'hidden'} desktop:flex`}
      >
        <a
          href="#home"
          className="w-[inherit] py-12 btn btn-ghost text-title pl-10
                    desktop:w-auto desktop:p-[15px]
                    desktop:opacity-50 desktop:hover:opacity-100 hover:bg-[#1e2021] desktop:rounded-full"
        >
          LC
        </a>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
