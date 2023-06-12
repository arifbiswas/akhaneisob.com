import AdminLayout from "@/layout/AdminLayout";
import React from "react";

import AllProducts from "@/dashboard/allProducts/AllProducts";

const AdminPanel = () => {
  return (
    <main>
      <AdminLayout>
        <AllProducts />
      </AdminLayout>
    </main>
  );
};

export default AdminPanel;
