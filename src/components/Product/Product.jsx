import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img , name, seller, quantity, price, ratings} = props.product;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className="product-info">
                <div className="product-name">
                    <h6>{name}</h6>
                    <p>price : {price}</p>
                    <p>manufacturer : {seller}</p>
                    <p>Ratings : {ratings} star </p>
                </div>
                <button className='btn-cart'>Add To Cart</button>
           </div>
        </div>
    );
};

export default Product;