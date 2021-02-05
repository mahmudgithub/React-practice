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

import React, { Component } from 'react'

export class Setstate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:['mahmud','hosain']
        }
    }

    lol=()=>{
        this.setState({
            name:this.state.name=['lamyaa','nowsin']
        })
    }
    
    render() {
        return (
            <div>
                {this.state.name}
                <button onClick={()=>this.lol()}>change</button>
            </div>
        )
    }
}

export default Setstate
