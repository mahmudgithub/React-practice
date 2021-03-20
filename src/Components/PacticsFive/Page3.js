import React from 'react'
import { useParams } from 'react-router'

const Page3 = () => {
    const { type } = useParams();
    return (
        <div>
            page3
            {type}
        </div>
    )
}

export default Page3
