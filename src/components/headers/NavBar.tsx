
export default function NavBar() {
  return (
    <>
      <nav id="navbar" className="flex flex-col md:flex-row px-10 ">
        <div>
          <div className="px-3 py-2 text-2xl font-extrabold text-title">About Me</div>
        </div>
        <div>
          <div className="px-3 py-2 text-2xl font-extrabold text-title">Education</div>
        </div>
        <div>
          <div className="px-3 py-2 text-2xl font-extrabold text-title">Experience</div>
        </div>
      </nav>
    </>
  );
}
