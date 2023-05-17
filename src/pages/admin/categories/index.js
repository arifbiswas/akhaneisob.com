import AllCategories from '@/dashboard/Categories/AllCategories';
import AdminLayout from '@/layout/AdminLayout';
import React from 'react';

const AdminCategories = () => {
    return (
        <main>
            <AdminLayout>
       <AllCategories />
       
      </AdminLayout> 
        </main>
    );
};

export default AdminCategories;