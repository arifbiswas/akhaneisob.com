import Link from 'next/link';
import React from 'react';

const CategoriesCard = ({data}) => {
// console.log(data._id);
    return (
        <Link href={`/categories/${data._id}`} className='relative w-full flex items-center justify-center px-3 py-2 rounded-md shadow-lg drop-shadow-lg border-2 border-green-600 transition-all duration-150 bg-green-700 hover:bg-green-800 scale-100 hover:scale-105 shadow-green-500'>
            <div className='grid grid-cols-3 gap-2 justify-items-center items-center'>
            <img className='w-full rounded-full border-4 border-green-800 shadow-md shadow-green-500' src="https://t3.ftcdn.net/jpg/00/88/43/58/360_F_88435847_HhglbcoGP5qOX3DfudP3hN5z95eTrHqz.jpg" alt="" />
            <h1 className='col-span-2 text-center text-sm font-medium text-white z-20'>{data.name}</h1>
            </div>
           
        </Link>
    );
};

export default CategoriesCard;