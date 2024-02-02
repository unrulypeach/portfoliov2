function NavBtn({ title }: { title: string }) {
  return (
    <a href={`#${title}`} className="btn btn-ghost ml-10 w-60">
      {title.toUpperCase()}
    </a>
  );
}

export default NavBtn;
