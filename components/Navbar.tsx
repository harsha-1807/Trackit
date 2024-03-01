"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const Navbar = () => {
  const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    console.log(user.picture);
    return (
      <header className="w-full flex items-center justify-center fixed top-5 inset-x-0 mx-auto z-50">
        <nav
          className="nav mt-1 relative rounded-lg shadow-md shadow-[#905de88a] border-transparent 
      dark:bg-white/5 bg-opacity-60 h-16 w-[80vw] backdrop-filter backdrop-blur-xl dark:border-[#905de88a] bg-white shadow-input flex justify-center space-x-4 px-6 py-4"
        >
          <div className="flex justify-between items-center w-full text-[#905de8] font-semibold">
            <Link href={"/"} className="flex items-center gap-1">
              <p className="text-2xl text-black font-bold">
                Track
                <span className="text-[#905DE8]"> It</span>
              </p>
            </Link>
            <div className="flex items-center justify-evenly w-[25vw] gap-7 text-[10px] md:text-[15px]">
              <Link href={"/"}>Home</Link>
              <Link href={"#trending"}>Trending</Link>
              {/* <Link href={"/"}>About Us</Link> */}
              {user.name}
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <Image
                    src={`${user.picture}`}
                    alt="user"
                    height={48}
                    width={48}
                    className="rounded-full "
                  />
                </div>
              </div>
              <Link href={"/api/auth/logout"}>Logout</Link>
            </div>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <>
        <header className="w-full flex items-center justify-center fixed top-5 inset-x-0 mx-auto z-50">
          <nav
            className="nav mt-1 relative rounded-lg shadow-md shadow-[#905de88a] border-transparent 
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
              <div className="flex items-center justify-evenly w-[25vw] gap-4 text-[10px] md:text-[15px]">
                <Link href={"/"}>Home</Link>
                <Link href={"#trending"}>Trending</Link>
                <Link href={"/aboutus"}>About Us</Link>
                <Link href={"/api/auth/login"}>Log In / Sign up</Link>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
};
export default Navbar;
