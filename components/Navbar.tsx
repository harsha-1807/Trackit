import Image from "next/image";
import Link from "next/link";

const navIcons = [
  {
    src: "/assets/icons/user.svg",
    alt: "user",
  },
];

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-center fixed top-5 inset-x-0  mx-auto z-50">
      <nav
        className="nav mt-1 relative rounded-full border-4 border-transparent 
      dark:bg-white/5 bg-opacity-60 h-16 w-[80vw] backdrop-filter backdrop-blur-xl dark:border-[#905de88a] bg-white shadow-input flex justify-center space-x-4 px-6 py-4"
      >
        <div className="flex justify-between items-center w-full text-[#905de8] font-semibold">
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src={"/assets/icons/logo.svg"}
              width={30}
              height={30}
              alt="logo"
            />
            <p className="text-2xl text-black font-bold">
              Track
              <span className="text-[#905DE8]"> It</span>
            </p>
          </Link>
          <div className="flex items-center justify-evenly w-[25vw] gap-4 text-[10px]  md:text-[15px]">
            <Link href={"/"}>Home</Link>
            <Link href={"#trending"}>Trending</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Log In / Sign up</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
