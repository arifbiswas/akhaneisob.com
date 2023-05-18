import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaFacebookSquare,
  FaYoutube,
  FaFolderPlus,
} from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { GoPackage } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawerReducer } from "../../../app/reducers/toggleReducer";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useDispatch();
  const { toggleDrawer } = useSelector((state) => state.toggle);
  // console.log(toggle);
  return (
    <div className=" bg-green-700 shadow-2xl drop-shadow-2xl w-full flex justify-between items-center py-4 px-5 gap-4 ">
      <div className="flex items-baseline gap-2">
        <Link href="/" className="text-3xl font-black text-white">
          AKHANEI-SOB
        </Link>
      </div>
      <div className="hidden lg:block ">
        <div className="flex">
          <Link
            href="/"
            className="px-4 py-2 text-white flex items-center gap-1"
          >
            <span>
              <FaHome />
            </span>
            <span>HOME</span>
          </Link>
          <Link
            href="/"
            className="px-4 py-2 text-white flex items-center gap-1"
          >
            <span>
              <MdWeb />
            </span>
            <span>Web Sites</span>
          </Link>
          <Link
            href="/"
            className="px-4 py-2 text-white flex items-center gap-1"
          >
            <span>
              <FaFacebookSquare />
            </span>
            <span>Facebook</span>
          </Link>
          <Link
            href="/"
            className="px-4 py-2 text-white flex items-center gap-1"
          >
            <span>
              <FaYoutube />
            </span>
            <span>Youtube</span>
          </Link>
          <Link
            href="/"
            className="px-4 py-2 text-white flex items-center gap-1"
          >
            <span>
              <FaFolderPlus />
            </span>
            <span>Other Pack</span>
          </Link>
          <Link
            href="/"
            className="px-4 py-2 text-white flex items-center gap-1"
          >
            <span>
              <GoPackage />
            </span>
            <span>Combo Pack</span>
          </Link>
          <Link
            href="/admin"
            className="px-4 py-2 text-white flex items-center gap-1"
          >
            <span>
              <RiAdminFill />
            </span>
            <span>Admin</span>
          </Link>
        </div>
      </div>
      <button
        onClick={() => dispatch(toggleDrawerReducer())}
        className="lg:hidden px-4 py-2 text-white"
      >
        {toggleDrawer ? <TfiClose size={30} /> : <FaBars size={30} />}
      </button>
    </div>
  );
};

export default Navbar;
