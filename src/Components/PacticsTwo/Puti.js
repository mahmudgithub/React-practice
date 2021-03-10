// import React from 'react'

// const Puti = (props) => {
//     return (
//         <div>
//         <h1>Hello i am puti,my name is {props.three}</h1> 
//         </div>
//     )
// }

// export default Puti

///application of context data
import React from 'react'
import { Reciver } from './Context'

const Puti = () => {
    return (
        <div>
            <h1>
            <Reciver >
                {
                    msg=>{
                        return msg;
                    }
                }

            </Reciver>
            </h1>

        </div>
    )
}

export default Puti
