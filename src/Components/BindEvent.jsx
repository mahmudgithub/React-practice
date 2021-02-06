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

// import React, { Component } from 'react'

// export class BindEvent extends Component {
//     lol=(a)=>{
//         alert(a)
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.lol.bind(this,'nowsin')}>click</button>
//             </div>
//         )
//     }
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
//                 <button onClick={this.lol.bind(this,'hello world')}>click</button>
//             </div>
//         )
//     }
// }

// export default BindEvent

// import React, { Component } from 'react'

// export class BindEvent extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mamud hosain'
//         }

//     }

            
//     lol=()=>{
//         this.setState({
//             name:'fariha Lmyaa'
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <p>{this.state.name}</p>
//                 <button onClick={this.lol}>click </button>
//             </div>
//         )
//     }
// }

// export default BindEvent


// import React, { Component } from 'react'

// export class BindEvent extends Component {
// constructor(props) {
//     super(props)

//     this.state = {
//          name:'mahmud'
//     }
// }
//  lol=(a)=>{
//      this.setState({
//          name:a
//      })
//  }


//     render() {
//         return (
//             <div>
//                 {this.state.name}
//                 <button onClick={this.lol.bind(this,'layaa')}>click</button>
//             </div>
//         )
//     }
// }

// export default BindEvent

// import React, { Component } from 'react'

// export class BindEvent extends Component {
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
//                 <button onClick={this.lol.bind(this,'hossain')}>change name</button>
//             </div>
//         )
//     }
// }

// export default BindEvent

// // use bind event in function
// import React from 'react'
// const BindEvent = () => {
//     const lol=(a)=>{
//         alert(a)
//     }
//     return (
//         <div>
//             <button onClick={lol.bind(this,'hello world')}>click </button>
//         </div>
//     )
// }

// export default BindEvent

// // use bind event in class 
// import React, { Component } from 'react'

// export class BindEvent extends Component {
//     lol=(a)=>{
//         alert(a)
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.lol.bind(this,'hi mahmud')}>click to change</button>
//             </div>
//         )
//     }
// }

// export default BindEvent

// // use bind event in class componnets of state and setState method
// import React, { Component } from 'react'

// export class BindEvent extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud'
//         }
//     }

//     lol=()=>{
//         this.setState({
//             name:'hossain'
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 name: {this.state.name}
//                 <br/>
//                 <button onClick={this.lol}>click to change</button>
//             </div>
//         )
//     }
// }

// export default BindEvent


// // use bind event in class componnets state and setState variabe change
// import React, { Component } from 'react'

// export class BindEvent extends Component {
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
//                 name: {this.state.name}
//                 <br/>
//                 <button onClick={this.lol.bind(this,'hossain' )}>click to change </button>
//             </div>
//         )
//     }
// }

// export default BindEvent


// // use bind event to class componets with state and setState CHANGE
// import React, { Component } from 'react'

// export class BindEvent extends Component {
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
//                 name: {this.state.name}
//                 <br/>
//                 <button onClick={this.lol.bind(this, this.state.name='hossain')}>click to change </button>
//             </div>
//         )
//     }
// }

// export default BindEvent
