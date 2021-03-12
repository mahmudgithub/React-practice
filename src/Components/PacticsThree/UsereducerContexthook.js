//pactics useReducer and useContext to send data from one to another
import React, {useReducer} from 'react'
// import Dada from './Dada'
import Nati from './Nati'

const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case'one':
            return state+1;
        case'two':
            return state-1;
        case'three':
            return initialState;

    }

}
export const Mycontext = React.createContext()
// export const Yourcontext = React.createContext()



const UsereducerContexthook = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        
           <Mycontext.Provider value={{ countValue: count , countDispatch: dispatch }}>
           {/* <Yourcontext.Provider value='ia hossain ferom dada'> */}
           {/* <Dada/> */}
           <div>
           <Nati/>
           {/* </Yourcontext.Provider> */}
           </div>
           </Mycontext.Provider>
        
    )
}

export default UsereducerContexthook
