import PanelHeader from "@/components/smallComponents/PanelHeader";
import WhiteButton from "@/components/smallComponents/whiteButton";
import PanelTable from "@/components/table/PanelTable";
import React from "react";
import { useSelector } from "react-redux";

const AllCategories = () => {
  const { categories } = useSelector((state) => state.categories);
  return (
    <div>
      <PanelHeader header={"Categories Panel"} title={"All Categories"} />
      <div className="flex justify-end w-full md:w-[97%] lg:w-[97%] ">
        <WhiteButton
          link={"/admin/categories/addcategory"}
          css={"rounded-lg text-white"}
          text={"Add Category"}
        />
      </div>
      <PanelTable
        contents={categories}
        name={true}
        picture={true}
        editLink={"/admin/categories/update"}
      />
    </div>
  );
};

export default AllCategories;
