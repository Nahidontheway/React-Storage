import React from 'react';

const Item = (props) => {
    const {name, price} = props.product
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Item;