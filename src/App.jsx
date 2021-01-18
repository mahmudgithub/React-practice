import React from 'react'
import './App.css';
import { First } from './Components/First';
import Fourth from './Components/Fourth';
import Useeffect from './Components/Useeffect';


const App=()=>{

  return (
<div>


<Fourth name='hossain' city='dhaka' roll= '6789'/>
<Fourth name='nowsin' city='pabna' roll=  '12345'/>
<Fourth name='lamyaa' city='dpabna' roll='01234'/>
<Useeffect/>


<First/>

</div> 
  )
}
export default App;
