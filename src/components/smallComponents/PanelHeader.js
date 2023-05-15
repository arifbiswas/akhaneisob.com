import React from 'react';

const PanelHeader = ({header,title}) => {
    return (
        <div className='text-center mt-5 text-white'>
        <h1 className='text-3xl font-bold'>{header}</h1>
             <p className='text-2xl'>{title}</p>
        </div>
    );
};

export default PanelHeader;