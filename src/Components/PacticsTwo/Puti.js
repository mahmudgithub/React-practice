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


// ///another way to send context value 
// import React from 'react'
// import { Mycontext } from '../Connector/Connector2'


// const Puti = () => {
//     return (
//         <div>
//             <Mycontext.Consumer>
//                 {
//                     msg=>{
//                         return msg;
//                     }
//                 }
//             </Mycontext.Consumer>
            
//         </div>
//     )
// }

// export default Puti


// ///another way to send contxt data
// import React from 'react'
// import { Mycontext, Receiver} from '../Connector/Connector2'

// const Puti = () => {
//     return (
//         <div>
//             <Receiver>
//                 {
//                     msg=>{
//                         return msg;
//                     }
//                 }
//             </Receiver>
//         </div>
//     )
// }

// export default Puti


// ///multiple context data send
// import React from 'react'
// import { Mycontext, Yourcontext } from '../Connector/Connector2'

// const Puti = () => {
//     return (
//         <div>
//             <Mycontext.Consumer>
//                 {
//                     msg=>{
//                         return <Yourcontext.Consumer>
//                             {
//                                 msg2=>{
//                                     return <h1>{msg2} and {msg}</h1>
//                                 }
//                             }
//                         </Yourcontext.Consumer>
//                     }
//                 }
//             </Mycontext.Consumer>
//         </div>
//     )
// }

// export default Puti


// //double multi context data send
// import React from 'react'
// import { Hercontext, Hiscontext, Mycontext, Yourcontext } from '../Connector/Connector2'

// const Puti = () => {
//     return (
//         <div>
//             <Mycontext.Consumer>
//                 {
//                     one=>{
//                         return <Yourcontext.Consumer>
//                             {
//                                 two=>{
//                                     return <Hiscontext.Consumer>
//                                         {
//                                             three=>{
//                                                 return <Hercontext.Consumer>
//                                                     {
//                                                         four=>{
//                                                         return<h1>{one} and {two} and {three} and {four}</h1>

//                                                         }
//                                                     }
//                                                 </Hercontext.Consumer>
//                                             }
//                                         }
//                                     </Hiscontext.Consumer>
//                                 }
//                             }
//                         </Yourcontext.Consumer>
//                     }
//                 }
//             </Mycontext.Consumer>
//         </div>
//     )
// }

// export default Puti
