import PanelHeader from '@/components/smallComponents/PanelHeader';
import AddProductForm from '../../dashboard/addProductFrom/AddProductForm';
import AdminLayout from '@/layout/AdminLayout';
import React from 'react';

const AddProduct = () => {
     
    return (
        <AdminLayout>
            <PanelHeader header={"Add Products Panel"} title={"fill the empty inputs"} />
            <AddProductForm />
        </AdminLayout>
    );
};

export default AddProduct;