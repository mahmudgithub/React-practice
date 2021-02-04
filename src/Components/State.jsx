// import React, { Component } from 'react'

// export default class State extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud',
//              age:26,
//              city:['raj','dha','khu'],
//              obj:{
//                  name2:'hossain',
//                  age2:30
//              }
//         }
      
//     }
    
//     render() {
//         return (
//             <div>
//                 my name is {this.state.name} and age is {this.state.age} and city is  {this.state.city[1]} 
//                 and my second name is {this.state.obj.name2}
//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'

// export class State extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud',
//              city:'rajshahi'
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 my name is {this.state.name} and city is  {this.state.city}
//             </div>
//         )
//     }
// }

// export default State


// import React, { Component } from 'react'

// export class State extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahm',
//              arr:['mahmud','hossain','nannu','lamyaa'],
//              fn:function(){
//                  this.city='rajshahi'
//              }
//         }
//     }
    
//     render() {
//         return (
//             <div>

//                my name is  {this.state.name}  and my love is {this.state.arr[3]}
                
//             </div>
//         )
//     }
// }

// export default State


// import React, { Component } from 'react'

// export class State extends Component {
//     constructor(props) {
//         super(props)
//     var lol={
//         name:'mahmud',
//         city:'rajshahi'
//     }
//         this.state = lol
             
        
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.name} and {this.state.city}
//             </div>
//         )
//     }
// }

// export default State

// import React, { Component } from 'react'

// export class State extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud',
//              city:['dhaka','rajshahi','chitgong']

//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 hello {this.state.name} and your city are {this.state.city[1]}
//             </div>
//         )
//     }
// }

// export default State

import React, { Component } from 'react'

export class State extends Component {
    constructor(props) {
        super(props)
        const lol={
            name:"mahmud",
            city:['raj','dha']
        }
    
        this.state = lol
    }
    
    render() {
        return (
            <div>
                hello {this.state.name} and {this.state.city[0]}
            </div>
        )
    }
}

export default State
