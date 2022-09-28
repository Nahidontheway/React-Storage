import React from 'react';
import Item from '../Item/Item';


const Products = () => {
    const products =[
        {id: 1, name: 'shoap', price: 30},
        {id: 2, name: 'rahita', price: 70},
        {id: 3, name: 'shoisa', price: 20},
        {id: 4, name: 'asiar', price: 60},
        {id: 5, name: 'rasha', price: 40}
      ]
    return (
        <div>
            <h1>Welcome to our store!</h1>
            {
                products.map(product => <Item key={product.id} product={product}></Item>)
            }
        </div>
    );
};

export default Products;