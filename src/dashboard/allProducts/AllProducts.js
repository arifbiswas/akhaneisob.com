
import PanelHeader from '@/components/smallComponents/PanelHeader';
import WhiteButton from '@/components/smallComponents/whiteButton';
import PanelTable from '@/components/table/PanelTable';
import React from 'react';
import { useSelector } from 'react-redux';

const AllProducts = () => {
    const {products} = useSelector(state => state.products)
    return (
        <div>
            <PanelHeader header={"Admin Panel"} title={"All Products"}/>
        <div className='flex justify-end w-full md:w-[97%] lg:w-[97%] '>
        <WhiteButton link={"/admin/addProduct"} css={"rounded-lg text-white"} text={"Add Products"} />
        </div>
       <PanelTable contents={products} 
       serial={true} 
        name={true}
        category={true}
        // price={true}
        // description={true}
        picture={true}
        // sales={true}
       />
        </div>
    );
};

export default AllProducts;