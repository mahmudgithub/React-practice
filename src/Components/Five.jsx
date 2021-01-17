import React, { useState } from 'react'

export const Five = () => {
    const x=10;
    const [name, setName] = useState('mahud')
    
    return (
        <>
        <h1>example of simple variable decliaration</h1>
        {x}
        <h2>Example of variable decliaration by useState</h2>
        {name}
        
        </>
    )
}
export default Five;
