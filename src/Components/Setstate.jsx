// import '../../node_modules/bootstrap/dist/css/bootstrap.main.css'
// import React, { Component } from 'react'

// export class setState extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud'
//         }
//     }
//     change=()=>{
//         this.setState({
//             name:'lamyaa'
//         })

//     }
    
//     render() {
//         return (
//             <div>
//                 my name is {this.state.name}
//                 <br/>
//                 <button onClick={()=>this.change()}>click me</button>
//             </div>
//         )
//     }
// }

// export default setState




// import React, { Component } from 'react'

// export class setState extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }
//     }
//     incrise=()=>{
//         this.setState({
//             count: this.state.count + 1
//         })

//     }
//     decrise=()=>{
//         this.setState({
//             count: this.state.count - 1
//         })

//     }
    
//     render() {
//         return (
//             <div>
//                 counter: {this.state.count}
//                 <br/>
//                 <button onClick={()=>this.incrise()}>incriment</button>
//                 <button onClick={()=>this.decrise()}>decriment</button>
//             </div>
//         )
//     }
// }

// export default setState

// import React, { Component } from 'react'

// export class Setstate extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }
//     }
//     lol=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 count: {this.state.count}
//                 <button onClick={()=>this.lol()}>change value</button>
//             </div>
//         )
//     }
// }

// export default Setstate


// import React, { Component } from 'react'

// export class Setstate extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             count:0
//         }
//     }
//     lol=()=>{
//         this.setState({
//             count:this.state.count + 1
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                count:  {this.state.count}
//                <button onClick={()=>this.lol()}>click</button>
//             </div>
//         )
//     }
// }

// export default Setstate

// import React, { Component } from 'react'

// export class Setstate extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:['mahmud','hosain']
//         }
//     }

//     lol=()=>{
//         this.setState({
//             name:this.state.name=['lamyaa','nowsin']
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.name}
//                 <button onClick={()=>this.lol()}>change</button>
//             </div>
//         )
//     }
// }

// export default Serce

// import React, { Component } from 'react'

// export class Setstate extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud'
//         }
//     }
//     lol=(a)=>{
//         this.setState({
//             name:this.state.name=a
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>name: {this.state.name}</h1>
//                 <button onClick={this.lol.bind(this,'hossain')}>chick</button>
//             </div>
//         )
//     }
// }

// export default Setstate

// import React from 'react'

// const Setstate = () => {
//     return (
//         <div>
//             <button className='btn btn-primary m-5 p-1    ' style={{ width: '18rem', borderColor:'black', borderWidth: '5px' }}>click me again</button>
//         </div>
//     )
// }

// export default Setstate


import React, { Component } from 'react'

export class Setstate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
             
        }
        
    }
    lol=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
    
    render() {
        return (
            <div>
              <span style={{border:'solid',borderColor:'red',background:'skyblue',margin:'15px'}}> count:  {this.state.count}</span>
               <br/>
               <button className='btn btn-primary mt-3' onClick={this.lol}>Click me add</button>
            </div>
        )
    }
}

export default Setstate
