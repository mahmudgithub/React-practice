import React from 'react'
import './App.css';
import Axioss from './Components/Axioss';
import Propss from './Components/Propss';
import Reactfragment from './Components/Reactfragment';
import Useeffect from './Components/Useeffect';
import Usestate1 from './Components/Usestate1';
import Usestate2 from './Components/Usestate2';
import Usestate3 from './Components/Usestate3';


const App=()=>{

  return (
<div>


<Propss name='mahmud' roll='12345' city='rajshhi'/>
<Propss name='mhossain' roll='12345' city='dhaka'/>
<Reactfragment/>
<Usestate1/>
<Usestate2/>
<Usestate3/>
<Axioss/>
<Useeffect/>


</div> 
  )
}
export default App;
