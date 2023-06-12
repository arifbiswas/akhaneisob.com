import PanelHeader from "@/components/smallComponents/PanelHeader";
import AddNewForm from "@/dashboard/addProductFrom/AddNewForm";
import AdminLayout from "@/layout/AdminLayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CategoryUpdate = () => {
  const categories = useSelector((state) => state.categories);

  const [category, setCategory] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const singleCategory = categories?.categories?.find(
      (item) => item._id === id
    );
    setCategory(singleCategory);
  }, [id]);
  return (
    <main>
      <AdminLayout>
        <PanelHeader
          header={"Update Category Panel"}
          title={"fill the empty inputs"}
        />
        <AddNewForm
          backendUrl={`http://localhost:3000/api/categories/${id}`}
          name={true}
          //   LiveLink={true}
          //   category={true}
          //   description={true}
          img={true}
          content={category}
          isCategory={true}
        />
      </AdminLayout>
    </main>
  );
};

export default CategoryUpdate;
