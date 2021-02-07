// // use if-else condition 
// import React, { Component } from 'react'

// export class Condition extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isuser: true
//         }
//     }
    
//     render() {
//        if(this.state.isuser){return <div>hello user</div>}
//        else{return <div>not user</div>}
//     }
// }
// export default Condition

// // second way element variable
// import React, { Component } from 'react'

// export class Condition extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isuser:false
//         }
//     }
    
//     render() {
//         let msg;
//         if(this.state.isuser){
//             msg=<div>i am user</div>
//         }else{
//             msg=<div>i am not user</div>
//         }
//         return(msg)
//     }
// }

// export default Condition

// // ternary operetor
// import React, { Component } from 'react'

// export class Condition extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isuser:true
//         }
//     }
    
//     render() {
//         return (this.state.isuser ? <div>i am user</div>: <div>i am not user</div>)
//     }
// }

// export default Condition


// // short circuit operetor
// import React, { Component } from 'react'

// export class Condition extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isuser:false
//         }
//     }
    
//     render() {
//         return ( 
//             this.state.isuser && <div>i am user</div>
//         )
//     }
// }

// export default Condition
