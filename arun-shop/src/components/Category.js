// Category.js
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Card } from 'react-bootstrap';
import './Category.css';
import { getProducts, getProductsByCategoryId } from '../services/Product';

const Category = (props) => {
  const { id, name, color } = props
  const [products, setProducts] = useState()

  
  useEffect( () => {
    const loadProduct = async () => {
      try {
        getProductsByCategoryId(id).then((prods) => {
          setProducts(prods)
        })
      } catch (error) {
        console.log(error)
      }
    }
    loadProduct()
  }, [id])
  
  return (
    <Card className="category">
      <Card.Header as="h2" style={{ backgroundColor : color}}>{name}</Card.Header>
      <Card.Body>
        <div className="products-container">
          {
          products?.map((product, index) => (
              <Product key={index} {...product} />
            
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Category;
