import React from 'react';

const WhiteButton = ({text,css}) => {
    return (
        <button className={`rounded-md text-green-800 px-5 py-2 font-semibold border-2 border-green-600 shadow-md hover:shadow-green-300 transition-all duration-200 translate-y-0 hover:-translate-y-2 scale-100 hover:scale-105 ${css}`}>
        {text}
      </button>
    );
};

export default WhiteButton;