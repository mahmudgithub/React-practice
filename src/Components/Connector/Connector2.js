// import React from 'react'
// import Father from '../PacticsTwo/Father'

// const Connector2 = () => {
//     return (
//         <div>
//             <Father name='mahmud'/>
//         </div>
//     )
// }

// export default Connector2


//////application of context data
// import React from 'react'
// import { Donar } from '../PacticsTwo/Context'
// import Father from '../PacticsTwo/Father'

// const Connector2 = () => {
//     return (
//         <div>
//             <Donar value='i am mahmud'>
//             <Father />
//             </Donar>
            
//         </div>
//     )
// }

// export default Connector2


// ///another way to send constext value
// import React from 'react'
// import Father from '../PacticsTwo/Father'
// export const Mycontext=React.createContext();

// const Connector2 = () => {
//     return (
//         <div>
//             <Mycontext.Provider value='i am from mahmud'>
//             <Father/>
//             </Mycontext.Provider>
            
//         </div>
//     )
// }

// export default Connector2


// ///another way to send contxt data
// import React from 'react'
// import Father from '../PacticsTwo/Father'
// export const Mycontext=React.createContext();
// const Donar=Mycontext.Provider
// const Receiver=Mycontext.Consumer
// export{Receiver}
// const Connector2 = () => {
//     return (
//         <div>
//             <Donar value='i am new style of context data send'>
//             <Father/>
//             </Donar>
            
//         </div>
//     )
// }

// export default Connector2


// // //multipel conext data send
// import React from 'react'
// import Father from '../PacticsTwo/Father'
// export const Mycontext=React.createContext();
// export const Yourcontext=React.createContext();
// export const Hiscontext=React.createContext();
// export const Hercontext=React.createContext();

// const Connector2 = () => {
//     return (
//         <div>
//             <Mycontext.Provider value='i am first provider'>
//             <Yourcontext.Provider value='i am second provider '>
//                 <Hiscontext.Provider value='i am third provider'>
//                     <Hercontext.Provider value='i am fourth provider'>
//                     <Father/>
//                     </Hercontext.Provider>
//                 </Hiscontext.Provider>
//             </Yourcontext.Provider>
//             </Mycontext.Provider>
            
//         </div>
//     )
// }

// export default Connector2


//again pacgtics 
// import React from 'react'
// import { Donar } from '../PacticsTwo/Context'
// import Father from '../PacticsTwo/Father'

// const Connector2 = () => {
//     return (
//         <div>
//             <Donar value='i am mahmud from donar '>
//             <Father/>
//             </Donar>
            
//         </div>
//     )
// }

// export default Connector2


// import React from 'react'
// import Father from '../PacticsTwo/Father'
// export const Mycontext=React.createContext()
// export const Yourcontext=React.createContext()
// export const Hecontext=React.createContext()


// const Connector2 = () => {
//     return (
//         <div>
//             <Mycontext.Provider value='i am job less please ALLAH give a job'>
//                 <Yourcontext.Provider value='please ALLAH forgicve me'>
//                     <Hecontext.Provider value='without ALLAH ,have no God'>
//                     <Father/>

//                     </Hecontext.Provider>

//                 </Yourcontext.Provider>
            
//             </Mycontext.Provider>
//         </div>
//     )
// }

// export default Connector2
