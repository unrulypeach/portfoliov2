function NavBtn({ title }: { title: string }) {
  return (
    <a
      href={`#${title}`}
      className="py-12 hover:bg-[#1e2021] w-full btn btn-ghost text-title
                desktop:w-60 desktop: ml-8 desktop:p-0 desktop:rounded-full
                desktop:opacity-50 desktop:hover:opacity-100"
      // className="btn btn-ghost text-title opacity-50 hover:opacity-100 hover:bg-[#1e2021] ml-8 w-60"
    >
      {title.toUpperCase()}
    </a>
  );
}

export default NavBtn;
