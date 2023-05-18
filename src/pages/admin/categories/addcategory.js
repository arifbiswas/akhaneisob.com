import PanelHeader from "@/components/smallComponents/PanelHeader";
import AddNewForm from "@/dashboard/addProductFrom/AddNewForm";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const addCategory = () => {
  return (
    <main>
      <AdminLayout>
        <PanelHeader
          header={"Add Products Panel"}
          title={"fill the empty inputs"}
        />
        <AddNewForm
          backendUrl={"http://localhost:3000/api/categories"}
          name={true}
          //   LiveLink={true}
          //   category={true}
          //   description={true}
          img={true}
        />
      </AdminLayout>
    </main>
  );
};

export default addCategory;
