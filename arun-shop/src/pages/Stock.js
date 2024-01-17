import React from 'react';
import AllStockIn from '../components/StockModule/AllStockIn';
import Liststock from '../components/StockModule/Liststock';
import StockProduct from '../components/StockModule/StockProduct';
import NewStockProduct from '../components/StockModule/NewStockProduct';
import SelectProduct from '../components/StockModule/SelectProduct';
import Searchbar from'../components/General/Searchbar';
import EditStock from '../components/StockModule/EditStock';
const   Stock =() => {
  return (
    <div>
    <Searchbar/>
    <AllStockIn/>
    <Liststock/>
    {/* <StockProduct/> */}
    {/* <NewStockProduct/> */}
    {/* <SelectProduct/> */}
    {/* <EditStock/> */}
    </div>
  );
};

export default Stock;



