import PanelHeader from '@/components/smallComponents/PanelHeader';
import AdminLayout from '@/layout/AdminLayout';
import Head from 'next/head';
import React from 'react';

const Youtube = () => {
  
    return (
        <AdminLayout>
        
            <PanelHeader  header={"Youtube Panel"} title={"All products of youTubes"}/>
        </AdminLayout>
    );
};

export default Youtube;