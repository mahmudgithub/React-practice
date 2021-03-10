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


///another way to send constext value
import React from 'react'
import Father from '../PacticsTwo/Father'
export const Mycontext=React.createContext();

const Connector2 = () => {
    return (
        <div>
            <Mycontext.Provider value='i am from mahmud'>
            <Father/>
            </Mycontext.Provider>
            
        </div>
    )
}

export default Connector2
