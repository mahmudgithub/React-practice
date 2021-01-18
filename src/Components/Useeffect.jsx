import React, { useEffect } from 'react'
import Axios from 'axios'

const Useeffect = () => {
useEffect(()=>{
    const lol= async()=>{
        await Axios({
            method:'get',
            url:'http://127.0.0.1:8000/api/product/'
        }).then(response=>{
            console.log(response.data);
        })
    }
    lol()

},[])
    return (
        <div>
            
        </div>
    )
}

export default Useeffect
