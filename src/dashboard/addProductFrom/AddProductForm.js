"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import {RiImageAddFill} from "react-icons/ri"
const AddProductForm = () => {
    const [isPhoto ,setIsPhoto] = useState(false);
    const [formData , setFormData] = useState({});
    let urlImage = "";
    if(formData?.img) {
        urlImage = URL.createObjectURL(formData?.img[0])
    }
    // console.log(urlImage);
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const formateImage = new FormData();
        formateImage.append('image', formData.img[0]);
        axios.post("https://api.imgbb.com/1/upload?expiration=600&key=77702260127cd67cec6699998c4733dd",formateImage).then(res => {
            console.log(res.data.data.url);
            formData.img = res.data.data.url;
            if(res.data.data.url){
                axios.post("http://localhost:3000/api/products",formData).then(res =>{
                if(res.data.message === 'success'){
                    toast.success("Product created successfully")
                }else{
                    toast.error("Something went wrong 'Not Created at this time'")
                }
            })
            }else{
                toast.error("Something went wrong 'Image not found'")
            }
        }).catch(error => toast.error("Something went wrong"))
    }
   
    return (
        <form onSubmit={handleFormSubmit} className='px-2 lg:px-12 mt-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5'>
            <div className='flex flex-col  gap-3 '>
                <label htmlFor="product-name" className='font-semibold text-white text-xl '>P.Name</label>
                <input type="text" id='product-name' name="name" placeholder='product name' className='py-3 text-gray-500 font-medium px-5 rounded-md w-full outline-none' onBlur={(e)=>setFormData({...formData , name : e.target.value})} />
            </div>
            <div className='flex flex-col  gap-3 '>
                <label htmlFor="product-name" className='font-semibold text-white text-xl '>Categories</label>
                <input type="text" id='product-name' name="categories" placeholder='categories' className='py-3 text-gray-500 font-medium px-5 rounded-md w-full outline-none' onBlur={(e)=>setFormData({...formData , category : e.target.value})} />
            </div>
            <div className='flex flex-col  gap-3 '>
                <label htmlFor="description" className='font-semibold text-white text-xl ]'>Description</label>
                <input type="text" id='description' name="description" placeholder='description' className='py-3 text-gray-500 font-medium px-5 rounded-md  w-full outline-none' onBlur={(e)=>setFormData({...formData , description : e.target.value})} />
            </div>
           
            <div className='flex flex-col  gap-3 '>
                <label htmlFor="live-link-url" className='font-semibold text-white text-xl  '>Live Link</label>
                <input type="url" id='live-link-url' name="url" placeholder='live link url' className='py-3 text-gray-500 font-medium px-5 rounded-md  w-full outline-none' onBlur={(e)=>setFormData({...formData , url : e.target.value})} />
            </div>
            </div>
            <div className='flex flex-col  gap-3 mt-5'>
                <div className='flex items-center gap-3'>
            {/* photo add buttons  */}
                 <label onClick={()=>setIsPhoto(true)} htmlFor="photo1" className={`font-semibold ${isPhoto && "bg-green-500 p-1 rounded-md"}  text-white text-sm hover:bg-green-500 p-1 rounded-md`}>Photo Link</label> 
                  <label onClick={()=>setIsPhoto(false)}  className={`font-semibold text-white text-sm hover:bg-green-500 p-1 rounded-md ${!isPhoto && "bg-green-500 p-1 rounded-md "}`}>Photo</label>
             {/* photo add buttons  */}
                </div>
                <div>
                {
                    isPhoto ? <input type="text" id='photo1' name="photo" placeholder='img url' className='py-3 text-gray-500 font-medium px-5 rounded-md  w-full outline-none' onBlur={(e)=>setFormData({...formData , imgLink : e.target.files})} /> :<>
                    <label className='text-green-500' for="photo">
                    <img className='w-32 h-32 bg-white rounded-md p-2' src={urlImage ? urlImage :"/images/imgeaddicon.png"} alt="" />
                     </label>
                    <input type="file"  id='photo' name="photo" placeholder='img url' className='hidden py-3 text-gray-500 font-medium px-5 rounded-md  w-full outline-none' onChange={(e)=>setFormData({...formData , img : e.target.files})} />
                    </>
                }
                
               
                </div>
            </div>
           <div className=' mt-12'>
            <button type="submit" className='bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-md'>Add Product</button>
           </div>
        </form>
    );
};

export default AddProductForm;