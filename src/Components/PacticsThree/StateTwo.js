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
