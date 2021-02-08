// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud',
//              city:['rajshahi','dhaka','jkhulna']
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 my name is {this.state.name}
//                 <br/>
//                 my city are {this.state.city[0]}
//             </div>
//         )
//     }
// }

// export default Allpactics

// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
//         const lol={
//             name:'mahmud',
//             city:['rajshahi','dhaka','kulna']
//         }
    
//         this.state = lol
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.name}
//                 {this.state.city[1]}
//             </div>
//         )
//     }
// }

// export default Allpactics

// import React from 'react'

// function Allpactics() {
//     const lol =()=>{
//         alert('hi, mahmud')
//     }
//     return (
//         <div>
            
//             <button onClick={lol}>click to event </button>
//         </div>
//     )
// }

// export default Allpactics


// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     lol=()=>{
//         alert('hi,hossain')
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.lol}>click to update</button>
//             </div>
//         )
//     }
// }

// export default Allpactics

// import React from 'react'

// const Allpactics = () => {
//     const lol=()=>{
//         alert('hello,lamyaa')
//     }
//     return (
//         <div>
//             <button onClick={()=>lol()}>click to change</button>
//         </div>
//     )
// }

// export default Allpactics

// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     lol=()=>{
//         alert('allah mohan')
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={()=>this.lol()}>click to change </button>
//             </div>
//         )
//     }
// }

// export default Allpactics

// import React from 'react'

// function Allpactics() {
//     const lol=(a)=>{
//         alert('hello '+ a)
//     }
//     return (
//         <div>
//             <button onClick={lol.bind(this,'hossain')}>click to change</button>
//         </div>
//     )
// }

// export default Allpactics


// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     lol=(a)=>{
//         alert(a)
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.lol.bind(this,'lamyaa nowsin')}>click to change </button>
//             </div>
//         )
//     }
// }

// export default Allpactics

// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud'
//         }
//     }
    
//     lol=()=>{
//         this.setState({
//             name:this.state.name='hossin'
//         })
//     }
//     render() {
//         return (
//             <div>
//                 my name is {this.state.name}
//                 <br/>
//                 <button onClick={this.lol}>click to change name</button>
//             </div>
//         )
//     }
// }

// export default Allpactics

// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud'
//         }
//     }
//     lol=(a)=>{
//         this.setState({
//             name:a
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.name}
//                 <br/>
//                 <button onClick={this.lol.bind(this,'hossai')}>click to change</button>
//                             </div>
//         )
//     }
// }

// export default Allpactics
