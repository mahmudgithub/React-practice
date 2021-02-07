// // props Distructuring first way
// import React from 'react'

// const Distructuring = (props) => {
//     const{name,city}=props
//     return (
//         <div>
//             {name} and {city}
//         </div>
//     )
// }

// export default Distructuring

// second way of props Distructuring 
import React from 'react'

const Distructuring = ({name, city}) => {
    return (
        <div>
            {name} and {city}
        </div>
    )
}

export default Distructuring
