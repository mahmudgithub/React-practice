// import React from 'react'

// const EvenHandel = () => {
//     const change=()=>{
//         console.log('hello')
        
//     }
//     return (
//         <div>
//         <button onClick={change}>Click me</button>
//         </div>
//     )
// }

// export default EvenHandel

// import React from 'react'

// const EvenHandel = () => {
//     const change=()=>{
//         console.log('hello')
//     }
//     return (
//         <div>
//             <button onClick ={change}>click</button>
//         </div>
//     )
// }

// export default EvenHandel

// import React from 'react'

// const EvenHandel = () => {
//     const change=()=>{
//         console.log('add')
//     }
//     return (
//         <div>
//          <button onClick={change}>click</button>   
//         </div>
//     )
// }

// export default EvenHandel

// import React from 'react'

// const EvenHandel = () => {
//     const lol=()=>{
//         console.log('hello')
//     }
//     return (
//         <div>
//             <button onClick={()=>lol()}>click</button>
//         </div>
//     )
// }

// export default EvenHandel

// import React from 'react'

// const EvenHandel = () => {
//     const lol=()=>{
//         console.log('hello')

//     }
//     return (
//         <div>
//             <button onClick={()=>lol()}>click</button>    
//         </div>
//     )
// }

// export default EvenHandel


// import React from 'react'

// const EvenHandel = () => {
//     const lol=()=>{
//         console.log('hello')

//     }
//     return (
//         <div>
//             <button onClick={lol}>click</button>
//         </div>
//     )
// }

// export default EvenHandel


import React, { Component } from 'react'

export class EvenHandel extends Component {
    lol=()=>{
        console.log('hello')
    }
    render() {
        return (
            <div>
                <button onClick={this.lol}>click</button>
            </div>
        )
    }
}

export default EvenHandel
