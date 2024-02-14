function NavBtn({
  title,
  setShowMenu,
}: {
  title: string;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <a
      href={`#${title}`}
      onClick={() => setShowMenu(false)}
      className="flex pointer cursor-pointer justify-around w-[80%] group hover:bg-[#1e2021] 
                rounded-full desktop:w-56"
    >
      <div
        className="py-12 btn btn-ghost text-title hover:bg-inherit rounded-full
                  desktop:p-0 desktop:opacity-50 desktop:group-hover:opacity-100"
        // className="btn btn-ghost text-title opacity-50 hover:opacity-100 hover:bg-[#1e2021] ml-8 w-60"
      >
        {title.toUpperCase()}
      </div>
      <span className="pt-[7px] text-4xl my-auto desktop:hidden">›</span>
    </a>
  );
}

export default NavBtn;
