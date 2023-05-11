import Link from 'next/link';
import React from 'react';

const Button = ({text,css,link}) => {
    return (
        <>
            {
                link ?<Link href={link} className={`p-3 font-semibold bg-white text-green-800 ${css}`}>
             {text}
        </Link> :<button className={`p-3 font-semibold bg-white text-green-800 ${css}`}>
             {text}
        </button>
            }
        </>
    );
};

export default Button;