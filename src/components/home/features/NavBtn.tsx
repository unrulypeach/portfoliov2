function NavBtn({ title }: { title: string }) {
  return (
    <a
      href={`#${title}`}
      className="btn btn-ghost text-title opacity-50 hover:opacity-100 hover:bg-[#1e2021] ml-8 w-60"
    >
      {title.toUpperCase()}
    </a>
  );
}

export default NavBtn;
