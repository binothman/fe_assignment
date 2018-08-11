/*
* Products components wrapper
*/
import React from 'react'

// components
import Product from './Product'

// dummy data
import data from './data.json'


const Products = () => (
  <div className="products-list">
    {data.products.map(product => (
      <Product
        key={product.id}
        product={product}
      />
    ))}
  </div>
)

export default Products
