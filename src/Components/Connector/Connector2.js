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
import React from 'react'
import { Donar } from '../PacticsTwo/Context'
import Father from '../PacticsTwo/Father'

const Connector2 = () => {
    return (
        <div>
            <Donar value='i am mahmud'>
            <Father />
            </Donar>
            
        </div>
    )
}

export default Connector2
