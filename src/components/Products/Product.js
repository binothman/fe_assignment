/*
* Single Product
*/
import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'

const Product = ({ product }) => (
  <div className="product">
    <div className="image">
      <Image src={product.image} />
    </div>
    <div className="product-details">
      <div className="p-title">{product.title}</div>
      <h3 className="p-price">{product.price}</h3>
    </div>
  </div>
)

// props types
Product.propTypes = {
  product: PropTypes.object.isRequired,
}
export default Product
