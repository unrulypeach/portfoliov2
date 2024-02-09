function NavBtn({ title }: { title: string }) {
  return (
    <a href={`#${title}`} className="btn btn-ghost text-title hover:bg-[#212325] ml-10 w-60">
      {title.toUpperCase()}
    </a>
  );
}

export default NavBtn;
