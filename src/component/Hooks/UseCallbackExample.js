import React, { useState, useCallback } from 'react';

const Counter = ({ increment }) => {
    console.log("Counter rendered");
    return <button onClick={increment}>Increment</button>;
};

const UseCallbackExample = () => {
    const [count, setCount] = useState(0);
    const [num, setnum] = useState(0);

    const handleIncrement = useCallback(() => {
        console.log("called")
        setCount(count+1);
    }, []); 


    const handleIncrementnum = () => {
        console.log("called")
        setnum(num+1);
    }; 

    return (
        <div>
            <h1>Count: {count}</h1>
            <Counter increment={handleIncrement} />
            <button onClick={handleIncrementnum}>num{num}</button>
        </div>
    );
};

export default UseCallbackExample;
