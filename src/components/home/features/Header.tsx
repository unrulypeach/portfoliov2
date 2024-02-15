import { useState } from 'react';
import NavBar from './NavBar';
import { menu } from 'assets/icons';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`fixed ${showMenu && 'bg-bg'} self-end z-10`}>
      <button className="p-6 desktop:hidden float-right" onClick={() => setShowMenu(!showMenu)}>
        {menu}
      </button>
      <div
        className={`mt-8 bg-bg relative w-screen h-screen flex flex-col items-center
                    desktop:flex-row desktop:justify-between desktop:bg-transparent desktop:h-auto
                    desktop:pl-8 ${showMenu ? 'block' : 'hidden'} desktop:flex`}
      >
        <a
          href="#home"
          className="w-[80%] py-12 btn btn-ghost text-title rounded-full
                    desktop:w-auto desktop:p-[15px]
                    desktop:opacity-50 desktop:hover:opacity-100 hover:bg-[#1e2021] "
        >
          LC
        </a>
        <NavBar setShowMenu={setShowMenu} />
      </div>
    </div>
  );
}

export default Header;
