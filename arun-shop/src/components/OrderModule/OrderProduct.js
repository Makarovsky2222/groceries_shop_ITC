import React, {useMemo} from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Category from "../Category";
import Caddy from "./Caddy";
import categoriesData from "./categories.json"; // Import the JSON file directly
import "./Styling/OrderProduct.css";

const OrderProduct = () => {
 

  const initialCategories = useMemo(() => categoriesData.categories, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="order-dashboard">
        {initialCategories.map((category) => (
          <Category key={category.categoryName} {...category} />
        ))}
        <Caddy />
      </div>
    </DndProvider>
  );
};

export default OrderProduct;
