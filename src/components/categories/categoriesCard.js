import Link from 'next/link';
import React from 'react';

const CategoriesCard = ({data}) => {
    return (
        <Link href={`/categories/${data.id}`} className='relative w-full h-28 flex items-center justify-center p-5 rounded-md shadow-md drop-shadow-lg border border-green-300 hover:pb-1 transition-all duration-150'>
            <h1 className='text-center text-2xl font-medium text-white z-20'>{data.name}</h1>
            <div className='absolute w-full h-full bg-green-600 opacity-20 rounded-md'></div>
        </Link>
    );
};

export default CategoriesCard;