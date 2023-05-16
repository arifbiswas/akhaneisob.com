"use client"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react";
import data from "../../../components/categories/data.json"

import Metadata from "@/components/metadata/Metadata";
import MainCard from "@/components/cards/mainCard";
const sites =[
  {
    id: 1,
    name: "Nishantha",
    url: "https://www.nishantha.com",
    img: "https://media.istockphoto.com/id/1272542057/vector/web-develop-for-mobile-phone-vector-concept-create-software-and-app-for-cell-smartphones.jpg?s=612x612&w=0&k=20&c=nGfQHnvPegfTjwiUDj9g2YiySQnIXnMktTxUi6ULNgE=",
    description: "Nishantha is a global marketplace for all your products and services. We offer a wide range of products and services that are available to you.",


    },
    {
      id: 2,
      name: "Nishantha",
      url: "https://www.nishantha.com",
      img: "https://media.istockphoto.com/id/1272542057/vector/web-develop-for-mobile-phone-vector-concept-create-software-and-app-for-cell-smartphones.jpg?s=612x612&w=0&k=20&c=nGfQHnvPegfTjwiUDj9g2YiySQnIXnMktTxUi6ULNgE=",
      description: "Nishantha is a global marketplace for all your products and services. We offer a wide range of products and services that are available to you.",
  
      },
      {
        id: 3,
        name: "Nishantha",
        url: "https://www.nishantha.com",
        img: "https://media.istockphoto.com/id/1272542057/vector/web-develop-for-mobile-phone-vector-concept-create-software-and-app-for-cell-smartphones.jpg?s=612x612&w=0&k=20&c=nGfQHnvPegfTjwiUDj9g2YiySQnIXnMktTxUi6ULNgE=",
        description: "Nishantha is a global marketplace for all your products and services. We offer a wide range of products and services that are available to you.",
    
        },
        {
          id: 4,
          name: "Nishantha",
          url: "https://www.nishantha.com",
          img: "https://media.istockphoto.com/id/1272542057/vector/web-develop-for-mobile-phone-vector-concept-create-software-and-app-for-cell-smartphones.jpg?s=612x612&w=0&k=20&c=nGfQHnvPegfTjwiUDj9g2YiySQnIXnMktTxUi6ULNgE=",
          description: "Nishantha is a global marketplace for all your products and services. We offer a wide range of products and services that are available to you.",
      
          },
          {


            id: 5,
            name: "Nishantha",
            url: "https://www.nishantha.com",
            img: "https://media.istockphoto.com/id/1272542057/vector/web-develop-for-mobile-phone-vector-concept-create-software-and-app-for-cell-smartphones.jpg?s=612x612&w=0&k=20&c=nGfQHnvPegfTjwiUDj9g2YiySQnIXnMktTxUi6ULNgE=",
            description: "Nishantha is a global marketplace for all your products and services. We offer a wide range of products and services that are available to you.",
        
            },

]
const Categories = () =>{
    const [nish, setnish] = useState(null);
  const router = useRouter();
  const {id} = router.query;
  useEffect(()=>{
    const findNish = data.filter(item => item.id === id);
    setnish(findNish[0]);
  },[id])
//   console.log(nish);
    return (
       <>
       <Metadata title={nish?.name}/>
         <main>
          
            <div className="">
            <MainCard />
             
            </div>
        </main>
       </>
    )
}

export default Categories;