import PanelHeader from '@/components/smallComponents/PanelHeader';
import WhiteButton from '@/components/smallComponents/whiteButton';
import PanelTable from '@/components/table/PanelTable';
import React from 'react';

const AllCategories = () => {
    return (
        <div>
              <PanelHeader header={"Categories Panel"} title={"All Categories"}/>
        <div className='flex justify-end w-full md:w-[97%] lg:w-[97%] '>
        <WhiteButton link={"/admin/addCategory"} css={"rounded-lg text-white"} text={"Add Category"} />
        </div>
       <PanelTable />
        </div>
    );
};

export default AllCategories;