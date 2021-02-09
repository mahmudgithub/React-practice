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

// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud'
//         }
//         this.lol=this.lol.bind(this)
//     }
//     lol=()=>{
// this.setState({
//     name:'lamyaa'
// })
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.name}
//                 <br/>
//                 <button onClick={this.lol}>click to change</button>
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
//              message:'hello world'
//         }
//         this.lol=this.lol.bind(this)
//     }
//     lol=()=>{
//         this.setState({
//             message:'hello world2 fom mahmd'
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.message}
//                 <br/>
//                 <button onClick={this.lol}>click to change</button>
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
//              message:'mahmud'
//         }
//         this.lol=this.lol.bind(this)
//     }
//     lol=()=>{
//         this.setState({
//             message:'hossain'
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.message}
//                 <button onClick={this.lol}>click</button>
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
//         return (
//             <div>
//                 {this.state.count}
//                 <br/>
//                 <button onClick={this.lol}>click to add </button>
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
//              count:0
//         }
//         this.lol=this.lol.bind(this)
//         this.pol=this.pol.bind(this)
//     }
    
//     lol=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     pol=()=>{
//         this.setState({
//             count:this.state.count-1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.count}
//                 <br/>
//                 <button className='btn btn-primary' onClick={this.lol}>incrise value </button>
//                 <button className='btn btn-danger' onClick={this.pol}>incrise value </button>


//             </div>
//         )
//     }
// }

// export default Allpactics


// import React, { Component } from 'react'
// import Allpactics2 from './Allpactics2'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              message:'mahmud'
//         }
//         this.lol=this.lol.bind(this)
//     }

// pol=()=>{
//     this.setState({
//         message:'HOSSAIN'
//     })
// }

// lol=()=>{
//     this.setState({
//         message:'hossain'
//     })
// }
    
//     render() {
//         return (
//             <div>
//                 {this.state.message}
//                 <br/>
//                 <button onClick={this.pol}>click to change first</button>
//                 <Allpactics2 sos={this.lol}/>
                
//             </div>
//         )
//     }
// }

// export default Allpactics


// import React, { Component } from 'react'
// import Allpactics2 from './Allpactics2'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              LoverNames:'',
//              BestLover:''
//         }
//         this.lovers=this.lovers.bind(this)
//         this.love=this.love.bind(this)
//     }

//     lovers=()=>{
//         this.setState({
//             LoverNames:[`'lima', 'sorovi', 'jeba', 'nowsin', 'lamyaa'`]
//         })
//     }
    
//     love=()=>{
//         this.setState({
//             BestLover:'lamyaa'
//         })
//     }
//     render() {
//         return (
//             <div>  
//                my lovers are  <span style={{color:'red'}}>{this.state.LoverNames }</span>
//                 <br/>
//                 <button className='btn btn-primary' onClick={this.lovers}>click to lovers list</button>

//                 <Allpactics2 pog={this.love} tob={this.state.BestLover}/>
                
//             <br/>
//             </div>
//         )
//     }
// }

// export default Allpactics

// today 9.2.2021 pactics
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isuser:false,
//              name:'mahmud'
//         }
//     }
    
//     render() {
//         if (this.state.isuser) {return 'yes' }
//        else{return this.state.name}
        
//     }
// }




// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isuser:true
//         }
//     }

    
//     render() {
//         let message

//         if (this.state.isuser){message='true'}
//         else{message='false'}
//         return(message)
//     }
// }

// export default Allpactics

// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isuser: 'mahmud'
//         }
//     }
    
//     render() {
//         return (this.state.isuser=='mahmud' ? 'true': 'wrong')
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
    
//     render() {
//         return(
//             this.state.name=='mahmud' && `hello ${this.state.name}`
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
    
//     render() {
//         if (this.state.name=='mahmud'){return (`this is my name is ${this.state.name}`)}
//         else{return (`this not my name`)}
//     }
// }

// export default Allpactics

// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmudd'
//         }
//     }
    
//     render() {
//         return (this.state.name=='mahmud'? `my name is ${this.state.name}` : `this is not my name`)
//     }
// }

// export default Allpactics


// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmudd'
//         }
//     }
    
//     render() {
//         return (this.state.name=='mahmud' && `this is my name ${this.state.name}`)
//     }
// }

// export default Allpactics
