import React, { useEffect, useState } from 'react';

const Session = () => {
    const [name, setName] = useState('');
    const [local, setLocal] = useState('');

    useEffect(() => {
        const sessionName = localStorage.getItem("key");
        if (sessionName) {
            setLocal(sessionName);
        }
    }, []); // Run only on mount

    const handleSave = () => {
        localStorage.setItem("key", name);
        setLocal(name); // Update local state to reflect saved value
        setName(''); // Clear the input field
    };

    const handleRemove = () => {
        localStorage.removeItem("key");
        setLocal(''); // Clear local state
    };

    const handleClearAll = () => {
        localStorage.clear();
        setLocal(''); // Clear local state
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleClearAll}>Clear All</button>
            {local && <p>Stored Name: {local}</p>}
        </div>
    );
};

export default Session;
