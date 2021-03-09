import React from 'react'
import { useState } from 'react'

const Usestate = () => {
    const [one, setone] = useState('mahmud')
    return (
        <div>
            {one}
            <button onClick={()=>{setone('hossain')}}>click to change</button>
        </div>
    )
}

export default Usestate
