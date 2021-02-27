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


// //pactics function base props
// import React from 'react'

// const Allpactics = (props) => {
//     return (
//         <div>
//             hello {props.name} , your age is {props.age}
//         </div>
//     )
// }

// export default Allpactics

// //pactics class base props 
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     render() {
//         return (
//             <div>
//                 hello {this.props.name} ,your age is {this.props.age}
//             </div>
//         )
//     }
// }

// export default Allpactics
// //functional child props
// import React from 'react'

// const Allpactics = (props) => {
//     return (
//         <div>
//             hello {props.name} ,{props.children},{props.age}
//         </div>
//     )
// }

// export default Allpactics
// //class base child props 
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     render() {
//         return (
//             <div>
//                 hello {this.props.name},{this.props.children}{this.props.age}
//             </div>
//         )
//     }
// }

// export default Allpactics
// //pactics class base state 
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              message:'hello'
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.message}
//             </div>
//         )
//     }
// }

// export default Allpactics
// //state simple example
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud'
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 hello {this.state.name}
//             </div>
//         )
//     }
// }

// export default Allpactics
// //access object value with state
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud',
//              age:26,
//              city:'rajshahi'
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 `my name is {this.state.name} and city {this.state.city}`
//             </div>
//         )
//     }
// }

// export default Allpactics
// //create object outer state and then  access it into state
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
//     const obj={
//         name:'mahmud',
//         age:26,
//         city:'rajshahi'
        
//     }
//         this.state = obj
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.name} {this.state.age} {this.state.city}
//             </div>
//         )
//     }
// }

// export default Allpactics
// //keep array, object and function in state propertic values
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name:'mahmud',
//              arr:['apple','banana','mango'],
//              obj:{age:26},
//              fn:function(){return `i am hossain`}
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.name}
//                 <br/>
//                 {this.state.obj.age}
//                 <br/>
//                 {this.state.arr[1]}
//                 <br/>
//                 {this.state.fn()}
//             </div>
//         )
//     }
// }

// export default Allpactics

//event handeling
// //functional components
// import React from 'react'

// const Allpactics = () => {
//     const lol=()=>{
//         var arr=['apple','banana','coconat','mango'];
//         var one=arr.map((item)=>{
//             setTimeout(()=>{
//                 alert('Assalamu alikum')
//                 console.log(item);
//             },3000)
//         })
//     }
//     return (
//         <div>
//             <button onClick={()=>lol()}>click to show data</button>
//         </div>
//     )
// }

// export default Allpactics
//use map function in class components
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
       
//         this.state = {
//             list:['mahmud','hossain','nannu']
//         }
//           this.lol=this.lol.bind(this)
//     }
//     lol=()=>{
//         this.setState({
//             list:['apple','banaana','mango']
//         })
//     }
    
//     render() {
//         return (
//             <div>
//             <ul>
//               {this.state.list.map((item) => <li>{item}</li>)}
//             </ul>
//             <button onClick={()=>this.lol()}>click to list change</button>
//           </div>
//         )
//     }
// }

// export default Allpactics
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              arr:[1,2,3,4,5,6,7,8,9]
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <ul>
//                 {this.state.arr.map((item)=><li>{item}</li>)}
//                 </ul>
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
//              arr:[1,2,3,4,5,6]
//         }
//         this.lol=this.lol.bind(this)
//     }
//     lol=()=>{
//         this.setState({
//             arr:[8,9,10,11,12,13]
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.arr}
//                 <button onClick={()=>setTimeout(()=>{this.lol()},3000)}>click </button>
//                 {this.state.arr.map((item)=><li>{item}</li>)}
//             </div>
//         )
//     }
// }

// export default Allpactics

//

// //state,setState with button
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              message:'i am mahmud'
//         }
//         this.lol=this.lol.bind(this)
//     }
//     lol=()=>{
//         this.setState({
//             message:'i am hossain'
//         })

//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.message}
//                 <br/>
//                 <button className='btn btn-dark p-1' onClick={()=>this.lol()}>clicl to chnage</button>
//             </div>
//         )
//     }
// }

// export default Allpactics

// //use setstate increment value
// import React, { Component } from 'react'

// export class Allpactics extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              num:0
//         }
//         this.lol=this.lol.bind(this)
//     }
//     lol=()=>{
//         this.setState({
//             num:this.state.num+1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.num}
//                 <button onClick={()=>this.lol()}>incrise </button>
//             </div>
//         )
//     }
// }

// export default Allpactics

// //using useState incrise value
// import React,{useState} from 'react'

// const Allpactics = () => {
//     const [count, setcount] = useState(0);
//     const lol=()=>{
//         setcount(count+1)
//     }
//     return (
//         <div>
//             {count}
//             <button onClick={()=>lol()}>click to incrise</button>
//         </div>
//     )
// }

// export default Allpactics
// //object in hook
// import React ,{useState}from 'react'

// const Allpactics = () => {
//     const [my, setmy] = useState({
//         name:'',
//         age:''
//     })
//     const lol=()=>{
//         setmy({
//             name:my.name='hossain',
//             age:my.age=26

//         })
//     }
//     return (
//         <div>
//             {my.name} and {my.age}
//             <br/>
//             <button onClick={()=>lol()}>click</button>
//         </div>
//     )
// }

// export default Allpactics
// //onChange method in hook
// import React,{useState} from 'react'

// const Allpactics = () => {
//     const [obj, setobj] = useState({
//         name:'',
//         age:''
//     })
//     return (
//         <div>
//             name:{obj.name} and age:f{obj.age}
//             <br/>
//             <input value={obj.name} onChange={(e)=>setobj({...obj,name:e.target.value})}/>
//             <input value={obj.age} onChange={(e)=>setobj({...obj,age:e.target.value})}/>
//         </div>
//     )
// }

// export default Allpactics
// //useState with array
// import React,{useState} from 'react'

// const Allpactics = () => {
//     const [arr, setarr] = useState([1,2,3,4,5])
//     const lol=()=>{
//         setarr([6,7,8,9,10])
//     }
//     return (
//         <div>
//             <ul>{arr.map((item,index)=>{return <li key={index}>{item}</li>})}</ul>
//             <br/>
//             <button onClick={()=>lol()}>onClick</button>
//         </div>
//     )
// }

// export default Allpactics
//application of useEffect 
// //using useEffect count title counter
// import React,{useState,useEffect} from 'react'

// const Allpactics = () => {
//     const [count, setcount] = useState(0)
//     const lol=()=>{
//         setcount(count+1)
//     }
//     useEffect(()=>{
//         document.title=`count: ${count}`
//     })
//     return (
//         <div>
//             {count}
//             <br/>
//             <button onClick={()=>lol()}>click to incrise</button>
//         </div>
//     )
// }

// export default Allpactics

// //run useEffec conditionally
// import React,{useState,useEffect} from 'react'

// const Allpactics = () => {
//     const [count, setcount] = useState(0)
//     const [name, setname] = useState('')
//    const lol=()=>{
//         setcount(count+1)
//     }
//     useEffect(()=>{
//         console.log(`count`);
//         document.title=`count: ${count}`
//     },[count])
    
//     return (
//         <div>
//             {count}
//             <br/>
//             <button onClick={()=>lol()}>click to count</button><br/>
//             {name}
//             <br/>
//             <input value={name} onChange={(e)=>setname(e.target.value)}/>
//         </div>
//     )
// }

// export default Allpactics
