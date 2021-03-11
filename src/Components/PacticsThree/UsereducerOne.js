// import React, { useReducer } from 'react'

// const initialState=0;
// const reducer=(state,action)=>{
//     switch(action){
//         case'increment':
//             return state+1;
//         case'decrement':
//             return state-1;
//         case'reset':
//             return initialState;
//         case'reset':
//             return state;
//     }
// }
// const StateTwo = () => {
//     const [count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             count:{count}<br/>
//             <button onClick={()=>{dispatch('increment')}}>increment+</button>
//             <button onClick={()=>{dispatch('decrement')}}>decrement-</button>
//             <button onClick={()=>{dispatch('reset')}}>reset</button>
//         </div>
//     )
// }

// export default StateTwo


// import React from 'react'
// import { useReducer } from 'react'
// const initialState=0;
// const reducer=(state,action)=>{
//     switch(action){
//         case'one':
//             return state+1;
//         case'two':
//             return state-1;
//         case'three':
//             return initialState;

//     }

// }

// const StateTwo = () => {
//     const [count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             count:{count}<br/>
//             <button onClick={()=>{dispatch('one')}}>++++</button>
//             <button onClick={()=>{dispatch('two')}}>---</button>
//             <button onClick={()=>{dispatch('three')}}> rset</button>
//         </div>
//     )
// }

// export default StateTwo


// //pactics multiple button handel by useReducer
// import React, { useReducer } from 'react'
// import { actions } from 'react-table';
// const initialState= 'Chose your name';

// const reducer=(state,action)=>{
//     switch(action){
//         case'one':
//         return state='mahmud';
//         case'two':
//         return state='hossain';
//         case'three':
//         return state='nannu';
//         case'four':
//         return state;
//     }
// }
// const StateTwo = () => {
//     const [name, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//            <span style={{color:'blue'}}>Names: </span><span style={{color:'red',border:'solid 3px' ,backgroundColor:'black'}}>{name}</span> <br/>
//             <button onClick={()=>{dispatch('one')}}>first name</button>
//             <button onClick={()=>{dispatch('two')}}>second name</button>
//             <button onClick={()=>{dispatch('three')}}>third name</button>
//             <button onClick={()=>{dispatch('four')}}>reset name</button>
            
//         </div>
//     )
// }

// export default StateTwo


// //object in hook useReducer
// import React, { useReducer } from 'react'
// const initialState={
//     value:0
// };
// const reducer=(state,action)=>{
//     switch(action){
//         case'one':
//             return {
//                 value: state.value+1
//             }
//         case'four':
//             return {
//                 value: state.value+5
//             }
//         case'two':
//             return {
//                 value:state.value-1
//             }
//         case'three':
//             return initialState;

//     }

// }

// const StateTwo = () => {
//     const [count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             count:{count.value}<br/>
//             <button onClick={()=>{dispatch('one')}}>+++</button>
//             <button onClick={()=>{dispatch('two')}}>---</button>
//             <button onClick={()=>{dispatch('three')}}>reset</button>
//             <button onClick={()=>{dispatch('four')}}>+++</button>
//         </div>
//     )
// }

// export default StateTwo
