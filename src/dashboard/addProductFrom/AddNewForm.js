"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { RiImageAddFill } from "react-icons/ri";
import { useSelector } from "react-redux";
const AddNewForm = ({
  name,
  category,
  description,
  img,
  LiveLink,
  backendUrl,
}) => {
  const { categories } = useSelector((state) => state.categories);
  const [isPhoto, setIsPhoto] = useState(false);
  const [formData, setFormData] = useState({});
  let urlImage = "";
  if (formData?.imgUrl) {
    urlImage = URL.createObjectURL(formData?.imgUrl[0]);
  }
  // console.log(urlImage);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formateImage = new FormData();
    formateImage.append("image", formData.imgUrl[0]);
    axios
      .post(
        "https://api.imgbb.com/1/upload?expiration=600&key=77702260127cd67cec6699998c4733dd",
        formateImage
      )
      .then((res) => {
        console.log(res.data.data.url);
        formData.imgUrl = res.data.data.url;
        console.log(formData);
        if (res.data.data.url) {
          axios.post(backendUrl, formData).then((res) => {
            console.log(res);
            if (res.data.message === "success") {
              toast.success("created successfully");
            } else {
              toast.error("Something went wrong 'Not Created at this time'");
            }
          });
        } else {
          toast.error("Something went wrong 'Image not found'");
        }
      })
      .catch((error) => toast.error("Something went wrong"));
  };

  return (
    <form onSubmit={handleFormSubmit} className="px-2 lg:px-12 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
        {name && (
          <div className="flex flex-col  gap-3 ">
            <label
              htmlFor="product-name"
              className="font-semibold text-white text-xl "
            >
              Name
            </label>
            <input
              type="text"
              id="product-name"
              name="name"
              placeholder="product name"
              className="py-3 text-green-500 focus:shadow-lg focus:shadow-green-500 font-medium px-5 rounded-md w-full outline-none"
              onBlur={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        )}
        {category && (
          <div className="flex flex-col  gap-3 ">
            <label
              htmlFor="category"
              className="font-semibold text-white text-xl "
            >
              Categories
            </label>
            <select
              name="category"
              id="category"
              className="py-3 text-green-900 font-medium px-5 rounded-md w-full outline-none"
              onBlur={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              {categories.map((category, index) => (
                <option
                  key={category?._id || index}
                  defaultValue={category?.name}
                >
                  {category?.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {description && (
          <div className="flex flex-col  gap-3 ">
            <label
              htmlFor="description"
              className="font-semibold text-white text-xl ]"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="description"
              className="py-3 text-green-500 font-medium px-5 rounded-md  w-full outline-none"
              onBlur={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
        )}

        {LiveLink && (
          <div className="flex flex-col  gap-3 ">
            <label
              htmlFor="live-link-url"
              className="font-semibold text-white text-xl  "
            >
              Live Link
            </label>
            <input
              type="url"
              id="live-link-url"
              name="url"
              placeholder="live link url"
              className="py-3 text-green-500 font-medium px-5 rounded-md  w-full outline-none"
              onBlur={(e) => setFormData({ ...formData, url: e.target.value })}
            />
          </div>
        )}
      </div>
      {img && (
        <div className="flex flex-col  gap-3 mt-5 w-full lg:w-40">
          <div className="flex items-center gap-3">
            {/* photo add buttons  */}
            <label
              onClick={() => setIsPhoto(true)}
              htmlFor="photo1"
              className={`font-semibold ${
                isPhoto && "bg-green-500 p-1 rounded-md"
              }  text-white text-sm hover:bg-green-500 p-1 rounded-md`}
            >
              Photo Link
            </label>
            <label
              onClick={() => setIsPhoto(false)}
              className={`font-semibold text-white text-sm hover:bg-green-500 p-1 rounded-md ${
                !isPhoto && "bg-green-500 p-1 rounded-md "
              }`}
            >
              Photo
            </label>
            {/* photo add buttons  */}
          </div>
          <div>
            {isPhoto ? (
              <input
                type="text"
                id="photo1"
                name="photo"
                placeholder="img url"
                className="py-3 text-green-500 font-medium px-5 rounded-md  w-full outline-none"
                onBlur={(e) =>
                  setFormData({ ...formData, imgUrl: e.target.files })
                }
              />
            ) : (
              <>
                <label className="text-green-500" htmlFor="photo">
                  <img
                    className="w-32 h-32 bg-white rounded-md p-2"
                    src={urlImage ? urlImage : "/images/imgeaddicon.png"}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  placeholder="img url"
                  className="hidden py-3 text-green-500 font-medium px-5 rounded-md  w-full outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, imgUrl: e.target.files })
                  }
                />
              </>
            )}
          </div>
        </div>
      )}
      <div className=" my-12">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-md"
        >
          Add New
        </button>
      </div>
    </form>
  );
};

export default AddNewForm;
