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
// import React from 'react'
// import { Reciver } from './Context'

// const Puti = () => {
//     return (
//         <div>
//             <h1>
//             <Reciver >
//                 {
//                     msg=>{
//                         return msg;
//                     }
//                 }

//             </Reciver>
//             </h1>

//         </div>
//     )
// }

// export default Puti


///another way to send context value 
import React from 'react'
import { Mycontext } from '../Connector/Connector2'


const Puti = () => {
    return (
        <div>
            <Mycontext.Consumer>
                {
                    msg=>{
                        return msg;
                    }
                }
            </Mycontext.Consumer>
            
        </div>
    )
}

export default Puti
