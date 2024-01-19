// Categories.js
import React from 'react';
import AllProductList from '../components/Categories/CategoryProducts';
import BlockCategory from '../components/Categories/BlockCategory';
import PreviewContent from '../components/ManageProfile/PreviewContent';

const Categories = () => {
  return (
    <div>
      <BlockCategory />
      <AllProductList />
      
      {/* <AllProductList /> */}

      <PreviewContent />


    </div>
  );
};

export default Categories;
 