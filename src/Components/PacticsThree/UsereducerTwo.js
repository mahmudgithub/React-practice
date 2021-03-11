// //multiple useReducer
// import React, { useReducer } from 'react'
// const initialState=0;
// const reducer=(state,value)=>{
//     switch(value){
//         case'one':
//         return state+1;
//         case'two':
//         return state-1;
//         case'three':
//         return initialState;
//     }

// }

// const StateThree = () => {
//     const [count, dispatch] = useReducer(reducer, initialState)
//     const [counttwo, dispatchtwo] = useReducer(reducer, initialState)
//     return (
//         <div>
//             counst:{counttwo}<br/>
//             <button onClick={()=>{dispatchtwo('one')}}>++</button>
//             <button onClick={()=>{dispatchtwo('two')}}>--</button>
//             <button onClick={()=>{dispatchtwo('three')}}>reset</button>


//             <div>
//             counst:{count}<br/>
//             <button onClick={()=>{dispatch('one')}}>++</button>
//             <button onClick={()=>{dispatch('two')}}>--</button>
//             <button onClick={()=>{dispatch('three')}}>reset</button>
//         </div>

//         </div>

        
//     )
// }

// export default StateThree
