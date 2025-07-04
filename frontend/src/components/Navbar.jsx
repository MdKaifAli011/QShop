import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import CartDrawer from "./CartDrawer";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  let accesstoken = localStorage.getItem("accesstoken");

  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <>
      <nav className="absolute top-0 font-semibold h-[70px] w-full bg-white shadow-md flex items-center justify-between px-8">
        <div className="text-3xl font-bold tracking-wide select-none cursor-pointer transition-transform hover:scale-105">
          QShop
        </div>

        {accesstoken ? (
          <>
            <section className="flex">
              <div className="p-4">
                <Link to={"/home"}>Home</Link>
              </div>
              <div className="p-4">
                <Link to={"/products"}>Products</Link>
              </div>
              <div className="p-4">Men</div>
              <div className="p-4">Women</div>
              <div className="p-4">Kids</div>
              <div className="p-4">Footware</div>
              <div className="p-4">Accessories</div>
              <div className="p-4">Search</div>
            </section>

            <section className="flex gap-4 items-center">
              <div className="text-3xl  ">
                <CartDrawer />
              </div>

              <div className="text-2xl">
                <Avatar sx={{ bgcolor: "black" }} {...stringAvatar("John Doe")} />
              </div>
            </section>
          </>
        ) : (
          <div className="flex gap-4 items-center">
            <Link to={"/login"}>
              <button className="bg-white px-6 py-2 rounded-full shadow-md text-black font-semibold ]  hover:bg-violet-100 hover:scale-105 transition-all duration-200">
                Login
              </button>
            </Link>
            <Link to={"/"}>
              <button className="bg-black px-6 py-2 rounded-full text-white font-semibold shadow-md hover:from-violet-600 hover:to-violet-800 hover:scale-105 transition-all duration-200">
                Signup
              </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
