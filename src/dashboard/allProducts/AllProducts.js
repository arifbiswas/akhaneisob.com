import Button from '@/components/smallComponents/Button';
import PanelHeader from '@/components/smallComponents/PanelHeader';
import PanelTable from '@/components/table/PanelTable';
import React from 'react';

const AllProducts = () => {
    return (
        <div>
            <PanelHeader header={"Admin Panel"} title={"All Products"}/>
        <div className='flex justify-end w-full md:w-[97%] lg:w-[97%] '>
        <Button link={"/admin/addProduct"} css={"rounded-lg"} text={"Add Products"} />
        </div>
       <PanelTable />
        </div>
    );
};

export default AllProducts;