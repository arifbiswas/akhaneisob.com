import React from "react";
import { TfiClose } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { toggleDrawerReducer } from "../../../app/reducers/toggleReducer";
const Drawer = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute pt-5 top-0 z-50 w-full min-h-screen bg-green-900">
      <div
        onClick={() => dispatch(toggleDrawerReducer())}
        className="absolute visible lg:hidden right-5 top-5 font-bold"
      >
        <TfiClose size={30} color="white" />
      </div>
      <div className="flex flex-col">
        <button className="px-4 py-2 text-2xl shadow-md text-white">
          HOME
        </button>
        <button className="px-4 py-2 text-2xl shadow-md text-white">
          WEB SITES
        </button>
        <button className="px-4 py-2 text-2xl shadow-md text-white">
          FACEBOOK
        </button>
        <button className="px-4 py-2 text-2xl shadow-md text-white">
          YOUTUBE
        </button>
        <button className="px-4 py-2 text-2xl shadow-md text-white">
          OTHERS PACK
        </button>
      </div>
    </div>
  );
};

export default Drawer;
