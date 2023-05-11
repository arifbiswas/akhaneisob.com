import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const AddProductForm = () => {
    const [formData , setFormData] = useState({});
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
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
        <form onSubmit={handleFormSubmit} className='w-[45%] flex flex-col gap-5 justify-center mx-auto mt-12'>
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
                <label htmlFor="photo" className='font-semibold text-white text-xl  '>Photo</label>
                <input type="file" id='photo' name="photo" placeholder='img url' className='py-3 text-gray-500 font-medium px-5 rounded-md  w-full outline-none' onBlur={(e)=>setFormData({...formData , img : e.target.files})} />
            </div>
            <div className='flex flex-col  gap-3 '>
                <label htmlFor="live-link-url" className='font-semibold text-white text-xl  '>Live Link</label>
                <input type="url" id='live-link-url' name="url" placeholder='live link url' className='py-3 text-gray-500 font-medium px-5 rounded-md  w-full outline-none' onBlur={(e)=>setFormData({...formData , url : e.target.value})} />
            </div>
           <div className='flex justify-center'>
            <button type="submit" className='bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-md'>Add Product</button>
           </div>
        </form>
    );
};

export default AddProductForm;