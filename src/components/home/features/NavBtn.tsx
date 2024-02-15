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
                  desktop:p-0 opacity-60 group-hover:opacity-100"
      >
        {title.toUpperCase()}
      </div>
      <span className="pt-[7px] text-4xl my-auto desktop:hidden">›</span>
    </a>
  );
}

export default NavBtn;
