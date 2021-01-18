import React, { useEffect } from 'react'
import Axios from 'axios'

const Axioss = () => {
    // useEffect(()=>{
const lol=async()=>{
    await Axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/posts'

    }).then(response=>{
        console.log(response.data);
    })
}
lol()
    // },[])
    return (
        <div>
            
        </div>
    )
}

export default Axioss
