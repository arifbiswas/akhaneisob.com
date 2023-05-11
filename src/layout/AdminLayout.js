import AdminPanelDrawer from '@/components/drawer/adminPanelDrawer';
import React from 'react';
import { TbArrowAutofitRight,TbArrowAutofitLeft } from "react-icons/tb";
import { useDispatch , useSelector } from 'react-redux';
import { toggleAdminPanelReducer } from '../../app/reducers/toggle';

const AdminLayout = ({children}) => {
    const {togglePanel} = useSelector(state => state.toggle)
    const dispatch = useDispatch();
    return (
        <div className={togglePanel ?"relative flex gap-5 transition-all duration-300" :"relative flex transition-all duration-300"}>
            <div className={togglePanel ?"absolute lg:relative z-40 top-3 -left-0 rounded-lg w-full lg:w-[25%] mx-auto  min-h-screen bg-green-900 transition-all duration-300" : "absolute lg:relative z-40 top-3  rounded-lg  -let-[100%] w-[0%] min-h-screen bg-green-700 transition-all duration-300" }>
            {
                togglePanel &&  <AdminPanelDrawer />
            }
           
            </div>
            <div className={`relative w-full top-3  rounded-md min-h-screen bg-green-900 transition-all duration-300`}>
            <div className='relative'>
        <button onClick={()=>dispatch(toggleAdminPanelReducer())} className='absolute  p-1 rounded-md mt-2 ml-2 text-white'> 
        {
            togglePanel ?<TbArrowAutofitLeft size={30}/> : <TbArrowAutofitRight size={30}/>
        }
        </button>
        </div>
            {children}
            </div>
        </div>
    );
};

export default AdminLayout;