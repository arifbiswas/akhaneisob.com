import React from 'react';
import Navbar from '@/components/navbar/Navbar'
import Drawer from '@/components/drawer/drawer';
import { useSelector } from 'react-redux';
const MainLayout = ({ children }) => {
    const { toggleDrawer } = useSelector(state => state.toggle)
    return (
        <>
            <div className={toggleDrawer ? "py-5 absolute z-50 w-full top-0 left-0 min-h-screen bg-green-900 transition-all duration-300" : "py-5 absolute w-full z-50 top-0 -left-[100%] min-h-screen bg-green-900 transition-all duration-300"}>
                <Drawer />
            </div>
            <Navbar />
            {children}
        </>

    );
};

export default MainLayout;