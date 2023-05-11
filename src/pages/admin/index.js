import AdminLayout from '@/layout/AdminLayout';
import React from 'react';

import AllProducts from '@/dashboard/allProducts/AllProducts';

const AdminPanel = () => {
    
  
    return (
       <AdminLayout>
       <AllProducts />
       
      </AdminLayout>
    );
};

export default AdminPanel;