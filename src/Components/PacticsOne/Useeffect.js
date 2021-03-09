import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count, setcount] = useState(0)
    useEffect(()=>{
        
    },[])
const lol=()=>{
    const arr=[1,2,3,4,5]
    setcount(arr.map((item)=>{
        return item
    }))
}
    return (
        <div>
            {count}
            <button onClick={()=>{lol()}}>click to change</button>
        </div>
    )
}

export default Useeffect
