import React from "react";
import AllStockIn from "../components/StockModule/AllStockIn";
import Searchbar from "../components/General/Searchbar";
import ListStock from "../components/StockModule/ListStock"
import ProductManagement from "../components/StockModule/ProductManagement";

const Stock = () => {
  return (
    <div>
      <Searchbar />
      <ListStock />
      <AllStockIn />
      {/* <EditStock/> */}
    </div>
  );
};

export default Stock;
