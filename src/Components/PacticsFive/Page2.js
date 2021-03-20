import React from 'react'
import { Link } from 'react-router-dom'

const Page2 = () => {
    
    return (
        <div>
            page2
            <button><Link to ='/page3/:type'> param</Link></button>
        </div>
    )
}

export default Page2
