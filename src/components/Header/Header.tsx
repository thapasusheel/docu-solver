import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="w-14">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex justify-center items-center gap-10 text-base">
        <div className="cursor-pointer hover:text-green-500">Home</div>
        <div className="cursor-pointer hover:text-green-500">About</div>
        <div className="cursor-pointer hover:text-green-500">Testimonial</div>
        <div className="cursor-pointer hover:text-green-500">FAQ</div>
        <div className="cursor-pointer hover:text-green-500">Author</div>
      </div>
      <div className="px-6 py-2 bg-black text-white font-semibold tracking-widest rounded-lg text-base cursor-pointer hover:bg-green-500 hover:text-black">
        Github
      </div>
    </div>
  );
};

export default Header;
