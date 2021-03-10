// import React from 'react'
// import Son from './Son'

// const Father = (props) => {
//     return (
//         <div>
//             <h1>hello i am father</h1>
//             <Son one={props.name}/>
//         </div>
//     )
// }

// export default Father


//////application of context data
import React from 'react'
import Son from './Son'

const Father = () => {
    return (
        <div>
            <Son/>
        </div>
    )
}

export default Father
