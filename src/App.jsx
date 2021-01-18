import React from 'react'
import './App.css';
import Axioss from './Components/Axioss';
import Propss from './Components/Propss';
import Reactfragment from './Components/Reactfragment';
import Useeffect from './Components/Useeffect';
import Usestate1 from './Components/Usestate1';
import Usestate2 from './Components/Usestate2';
import Usestate3 from './Components/Usestate3';
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Router1 from './Components/Router1';
import Router2 from './Components/Router2';


const App=()=>{

  return (
<div>
<BrowserRouter>

<ul>
  <li>
    <Link to='/router1'> router1 </Link>
  </li>
  <li>
    <Link to='/Router2'> router2 </Link>
  </li>
  
</ul>

<Switch>

  <Route path='/Router1'>
    <Router1/>
  </Route>

  <Route path='/Router2'>
    <Router2/>
  </Route>

</Switch>
</BrowserRouter>



{/* <Propss name='mahmud' roll='12345' city='rajshhi'/>
<Propss name='mhossain' roll='12345' city='dhaka'/>
<Reactfragment/>
<Usestate1/>
<Usestate2/>
<Usestate3/>
<Axioss/>
<Useeffect/> */}


</div> 
  )
}
export default App;
