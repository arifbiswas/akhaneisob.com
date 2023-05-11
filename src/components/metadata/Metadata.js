import Head from 'next/head';
import React from 'react';

const Metadata = ({title,name,content,icon}) => {
    return (
   
          <Head>
        <title>{title ? title : "AKhanei-Sob.com"}</title>
        <meta name={name ? name : "this page of akhanei-sob.com"} content={content ? content : "Akhaneisob.com is the best site for your online any resource you need like logo , motion graphics , intro, banner, web application and others"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={icon ? icon : "/favicon.ico"} />
      </Head>
      
    );
};

export default Metadata;