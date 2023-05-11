import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import { useDispatch } from 'react-redux';
import { toggleAdminPanelReducer } from '../../../app/reducers/toggle';
import Link from 'next/link';

const AdminPanelDrawer = () => {
    const dispatch = useDispatch();
    return (
        <div>
       <button onClick={()=> dispatch(toggleAdminPanelReducer())} className='absolute visible lg:hidden right-2 top-2 font-bold'><TfiClose size={28}  color='white'/></button>
           <div className='flex flex-col gap-4 justify-center items-start mt-12'>
           <Link href="/admin" className=' text-center text-2xl w-full lg:w-[80%] mx-auto text-white font-semibold  hover:bg-green-950'>All Products</Link>
            <Link href="/admin" className=' text-center text-2xl w-full lg:w-[80%] mx-auto text-white font-semibold  hover:bg-green-950 transition-all duration-200'>WpSites Products</Link>
            <Link href="/admin" className=' text-center text-2xl w-full  lg:w-[80%] mx-auto text-white font-semibold  hover:bg-green-950 transition-all duration-200'>Facebook Products</Link>
            <Link href="/admin/youtube" className=' text-center text-2xl w-full  text-white lg:w-[80%] mx-auto font-semibold  hover:bg-green-950 transition-all duration-200'>Youtube Products</Link>
            <Link href="/admin" className=' text-center text-2xl w-full  lg:w-[80%] mx-auto text-white font-semibold  hover:bg-green-950 transition-all duration-200'>Others Products</Link>
           </div>
        </div>
    );
};

export default AdminPanelDrawer;