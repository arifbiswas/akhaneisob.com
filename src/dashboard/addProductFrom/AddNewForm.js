"use client";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { UpdateAndAddedNewCategory } from "../../../app/categories/categoriesActions";

const AddNewForm = ({
  name,
  category,
  description,
  img,
  LiveLink,
  backendUrl,
  content,
  isCategory,
  isProducts,
}) => {
  // console.log(content);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isPhoto, setIsPhoto] = useState(false);
  const [formData, setFormData] = useState({});
  const [urlImage, setUrlImage] = useState("");
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
        // console.log(formData);
        if (res.data.data.url) {
          if (content?._id) {
            if (!formData.name) {
              formData.name = content.name;
            }
            axios.put(backendUrl, formData).then((res) => {
              if (res.data.message === "success") {
                toast.success("Updated successfully");
                if (isCategory) {
                  console.log(res.data.category);
                  UpdateAndAddedNewCategory(
                    res?.data?.category,
                    categories,
                    dispatch
                  );
                  router.push("/admin/categories");
                }
              } else {
                toast.error("Something went wrong");
              }
            });
          } else {
            axios.post(backendUrl, formData).then((res) => {
              console.log(res);
              if (res.data.message === "success") {
                toast.success("created successfully");
              } else {
                toast.error("Something went wrong 'Not Created at this time'");
              }
            });
          }
        } else {
          toast.error("Something went wrong 'Image not found'");
        }
      })
      .catch((error) => toast.error("Something went wrong"));
  };

  // console.log(formData?.imgUrl?.[0].name);
  useEffect(() => {
    if (formData?.imgUrl?.[0]?.name) {
      const newUrlImage = URL?.createObjectURL(formData?.imgUrl[0]);
      setUrlImage(newUrlImage);
    }
  }, [formData?.imgUrl, formData?.imgUrl?.[0].name]);

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
              defaultValue={content?._id && content?.name}
              placeholder="product name"
              className="py-3  focus:shadow-lg focus:shadow-green-500 font-medium px-5 rounded-md w-full outline-none"
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
              defaultValue={content?._id && content?.description}
              placeholder="description"
              className="py-3  font-medium px-5 rounded-md  w-full outline-none"
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
              defaultValue={content?._id && content?.url}
              placeholder="live link url"
              className="py-3  font-medium px-5 rounded-md  w-full outline-none"
              onBlur={(e) => setFormData({ ...formData, url: e.target.value })}
            />
          </div>
        )}
      </div>
      {img && (
        <div
          className={`flex flex-col  gap-3 mt-5 w-full ${isPhoto || "lg:w-40"}`}
        >
          <div className="flex items-center gap-3">
            {/* photo add buttons  */}

            <label
              onClick={() => setIsPhoto(false)}
              className={`font-semibold text-white text-sm hover:bg-green-500 p-1 px-2 rounded-md ${
                !isPhoto && "bg-green-500 p-1 rounded-md px-2"
              }`}
            >
              Photo
            </label>
            <label
              onClick={() => setIsPhoto(true)}
              htmlFor="photo1"
              className={`font-semibold ${
                isPhoto && "bg-green-500 p-1 rounded-md px-2"
              }  text-white text-sm hover:bg-green-500 p-1 rounded-md px-2`}
            >
              Photo Link
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
                defaultValue={
                  typeof content?.imgUrl === "string" && content?.imgUrl
                }
                className="py-3  font-medium px-5 rounded-md  w-full outline-none"
                onBlur={(e) =>
                  setFormData({ ...formData, imgUrl: e.target.files })
                }
              />
            ) : (
              <>
                <label className="" htmlFor="photo">
                  <img
                    className="w-32 h-32 bg-white rounded-md p-2"
                    src={
                      urlImage
                        ? urlImage
                        : content?.imgUrl
                        ? content?.imgUrl
                        : "/images/imgeaddicon.png"
                    }
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  placeholder="img url"
                  className="hidden py-3  font-medium px-5 rounded-md  w-full outline-none"
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
