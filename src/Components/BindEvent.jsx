import React from 'react'

const BindEvent = () => {
    const lol=(a)=>{
        alert(a)
    }
    return (
        <div>
            <button onClick={lol.bind(this,'hello world')}>click</button>
        </div>
    )
}

export default BindEvent
