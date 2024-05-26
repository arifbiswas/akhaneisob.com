import React from "react";
import { TfiClose } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { toggleAdminPanelReducer } from "../../../app/reducers/toggleReducer";
import Link from "next/link";
import { usePathname } from "next/navigation";
const data = [
  {
    id: 1,
    name: "Dashboard",
    path: "/admin",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
  {
    id: 2,
    name: "Categories",
    path: "/admin/categories",
  },
];

const AdminPanelDrawer = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex-1 max-h-[83vh] overflow-auto">
      <button
        onClick={() => dispatch(toggleAdminPanelReducer())}
        className="absolute visible lg:hidden right-2 top-2 font-bold"
      >
        <TfiClose size={28} color="white" />
      </button>
      <div className=" h-full flex flex-col gap-4 justify-center items-start mt-12">
        {data.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={
              item.path === pathname
                ? `text-center text-2xl w-full lg:w-[80%] mx-auto text-white font-semibold  bg-green-600 rounded-md py-2`
                : `text-center text-2xl w-full lg:w-[80%] mx-auto text-white font-semibold  hover:bg-green-950 rounded-md py-2`
            }
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminPanelDrawer;
