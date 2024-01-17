import React from 'react';
import AllStockIn from '../components/StockModule/AllStockIn';
import ListStock from '../components/StockModule/ListStock';
import StockProduct from '../components/StockModule/StockProduct';
import NewStockProduct from '../components/StockModule/NewStockProduct';
import SelectProduct from '../components/StockModule/SelectProduct';
import Searchbar from'../components/General/Searchbar';
import EditStock from '../components/StockModule/EditStock';
const   Stock =() => {
  return (
    <div>
    <Searchbar/>
    <ListStock/>
    <AllStockIn/>
    {/* <StockProduct/> */}
    {/* <NewStockProduct/> */}
    {/* <SelectProduct/> */}
    {/* <EditStock/> */}
    </div>
  );
};

export default Stock;



