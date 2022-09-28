import React from 'react';
import { multiply, add } from '../Utilities/Calculation';

const Shoes = () => {
    // const first = 55;
    // const second = 50;
    const total = add(20,30);
    const final = multiply(5,6)
    return (
        <div>
            <h1>New shoes component</h1>
            <p>Total : {total}</p>
            <p>Final : {final}</p>
        </div>
    );
};

export default Shoes;