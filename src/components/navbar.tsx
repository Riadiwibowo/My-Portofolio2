
const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between pt-3 shadow-sm">
      <h2 className="text-2xl">Riadi Wibowo</h2>
      <div className="flex flex-row gap-5 mr-5">
        <a href="">Home</a>
        <a href="youtube.com">summary</a>
        <a href="https://gitlab.com/Riadiwibowo/unit-testing-riadi">Projects</a>
        <a href="facebook.com">Education</a>
      </div>
    </div>
  );
};

export default Navbar;
