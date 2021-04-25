import Break from "./Break";

const Header = () => {
  return (
    <>
      <header className="py-2 flex justify-between items-center">
        <h1 className="text-4xl">Elixir for a JS Dev</h1>
        {/* TODO:
        <div>Light / Dark mode Toggle here</div> */}
      </header>
      <Break />
    </>
  );
};

export default Header;
