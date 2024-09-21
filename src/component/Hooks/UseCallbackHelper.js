import React from 'react';
import { memo } from 'react';

const UseCallbackHelper = memo(({ superhook }) => {
    console.log("usecallback--helper");
    const number = superhook(); // Call the superhook to get the current number
    return (
        <div>
            <h1>Number: {number}</h1>
        </div>
    );
});

export default UseCallbackHelper;
