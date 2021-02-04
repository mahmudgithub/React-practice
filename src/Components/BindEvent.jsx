// import React from 'react'

// const BindEvent = () => {
//     const lol=(a)=>{
//         alert(a)
//     }
//     return (
//         <div>
//             <button onClick={lol.bind(this,'hello world')}>click</button>
//         </div>
//     )
// }

// export default BindEvent



// import React, { Component } from 'react'

// export class BindEvent extends Component {
//     lol=(a)=>{
//         alert(a)
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.lol.bind(this,'mahmud')}>click</button>
//             </div>
//         )
//     }
// }

// export default BindEvent

import React, { Component } from 'react'

export class BindEvent extends Component {
    lol=(a)=>{
        alert(a)
    }
    render() {
        return (
            <div>
                <button onClick={this.lol.bind(this,'nowsin')}>click</button>
            </div>
        )
    }
}

export default BindEvent

