// import React, { Component } from 'react'

// export class HookuseState extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }
//         this.lol=this.lol.bind(this)
//     }
    
//     lol=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     render() {
//         console.log(this.state.count);
//         return (
//             <div>
//                 {this.state.count}
//                 <br/>
//                 <button onClick={()=>this.lol()}>click to incrise value</button>
                
                
//             </div>
//         )
//     }
// }

// export default HookuseState


// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [counter, setCounter] = useState(0)
//     return (
//         <div>
//             {counter}
//             <button onClick={()=>setCounter(counter+1)}>click to update</button>
//         </div>
//     )
// }

// export default HookuseState

// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             {count}
//             <br/>
//             <button onMouseOver={()=>setCount(count+10)}>click to update</button>
//         </div>
//     )
// }

// export default HookuseState

// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [count, setCount] = useState(0)
//     const lol=()=>{
//             setCount(count+10) 
//     }
//     return (
//         <div>
//             {count}
//             <button onClick={()=>lol()}>click to update</button>
//         </div>
//     )
// }

// export default HookuseState
