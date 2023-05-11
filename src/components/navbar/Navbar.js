import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawerReducer } from "../../../app/reducers/toggle";
import Link from "next/link";

const Navbar = () => {
    const dispatch = useDispatch();
    const {toggleDrawer} = useSelector(state => state.toggle)
    // console.log(toggle);
    return (
        <div className=" bg-green-700 shadow-2xl drop-shadow-2xl w-full flex justify-between items-center py-4 px-5 gap-4">
            <div className="flex items-baseline gap-2">
                <Link href="/"  className="text-3xl font-black text-white">AKHANEI-SOB</Link>

            </div>
            <div className="hidden lg:block">
                <Link href="/" className="px-4 py-2 text-white">HOME</Link>
                <button className="px-4 py-2 text-white">WEB SITES</button>
                <button className="px-4 py-2 text-white">FACEBOOK</button>
                <button className="px-4 py-2 text-white">YOUTUBE</button>
                <button className="px-4 py-2 text-white">OTHERS PACK</button>
                <Link href="/admin" className="px-4 py-2 text-white">Admin Panel</Link>
            </div>
            <button onClick={()=>dispatch(toggleDrawerReducer())} className="lg:hidden px-4 py-2 text-white">{toggleDrawer ? <TfiClose size={30} />:<FaBars size={30}  />}</button>
        </div>
    );
};

export default Navbar;