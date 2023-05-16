import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const MainCard = () => {
  return (
    <div className="min-h-screen my-12 flex flex-col items-center justify-center w-[95%] lg:w-[80%] mx-auto">
      <div className=" h-full grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <div>
          <img
            className="h-full lg:h-[70vh] rounded-md border-4 border-green-600 shadow-xl shadow-green-500"
            src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="relative bg-green-700 rounded-md p-5 border-4 border-green-600 shadow-xl shadow-green-500 text-white ">
          <h2 className="text-2xl font-semibold">Newspaper 1</h2>
          <p className="text-xl mt-3 font-semibold">500 Tk.</p>
          <p className="text-sm mt-3 text-yellow-300 font-semibold">
            5.00 Star
          </p>
          <p className="text-gray-200 mt-5">
            this is new Newspaper you can use your professional news website as
            like your comapany logo and we should know news channel and news
            categories any compnay need web portal current situation adn{" "}
          </p>

          <div className="lg:absolute bottom-4 mt-5">
            <div className="flex flex-col lg:flex-row gap-3">
              <button className="rounded-md bg-green-50 text-green-800 px-5 py-2 font-semibold border-2 border-green-600 shadow-md hover:shadow-green-300 transition-all duration-200 translate-y-0 hover:-translate-y-2 scale-100 hover:scale-105">
                Purchases 500 Tk
              </button>
              <button className="rounded-md bg-green-50 text-green-800 px-5 py-2 font-semibold border-2 border-green-600 shadow-md hover:shadow-green-300 transition-all duration-200 translate-y-0 hover:-translate-y-2 scale-100 hover:scale-105">
                Add to Cart
              </button>
              <button className="rounded-md bg-green-50 text-green-800 px-5 py-2 font-semibold border-2 border-green-600 shadow-md hover:shadow-green-300 transition-all duration-200 translate-y-0 hover:-translate-y-2 scale-100 hover:scale-105">
                View Live
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full lg:w-[80vw] p-5 border border-green-500 rounded-md">
        <h1 className="text-center text-white text-2xl py-3 ">Reviews</h1>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
        {
            [...Array(6)].map((item,index) => <SwiperSlide key={index}>
            <div className="bg-green-600 p-3 mb-5 h-56 rounded-md text-white shadow-lg drop-shadow-lg shadow-green-500">
             
             <div className="flex items-center gap-5">
              <img className="w-24 h-24 rounded-full border-2 border-green-500 shadow-lg shadow-green-500" src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
              <div>
              <p> Arif Biswas </p>
              <p className="text-xs"> date : 10/05/2023 </p>
              <p className="text-xs"> rating : 5 </p>
              </div>
             </div>

              <p className="bg-green-700 w-full text-sm rounded-md p-3 mt-3 text-center h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla rem cupiditate, nisi nesciunt qui ad....more</p>
            </div>
          </SwiperSlide>)
        }
          
          
        </Swiper>
      </div>
    </div>
  );
};

export default MainCard;
