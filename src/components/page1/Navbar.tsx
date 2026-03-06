const Navbar = () => {
  return (
    <div className="bg-white h-26 flex items-center justify-between px-30">
      <div className=" uppercase border-0 rounded-4xl bg-black text-white text-larger px-4 py-2">
        Target Audience
      </div>
      <div className="flex space-x-4">
        <button className="text-larger tracking-widest text-black uppercase">
          ↓ Digital Banking Platform
        </button>{" "}
      </div>
    </div>
  );
};

export default Navbar;
