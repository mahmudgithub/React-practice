import './App.css';
import React, {  useState } from 'react'
import Axioss from './Components/Axioss';
import Propss from './Components/Propss';
import Reactfragment from './Components/Reactfragment';
import Useeffect from './Components/Useeffect';
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Router1 from './Components/Router1';
import Router2 from './Components/Router2';
import Httpcompl1 from './Components/Httpcompl1';
import Class from './Components/Class';
import State from './Components/State';
import Setstate from './Components/Setstate';
import EvenHandel from './Components/EvenHandel';
import BindEvent from './Components/BindEvent';
import Distructuring from './Components/Distructuring';
import Allpactics from './Components/Allpactics';
import Mother from './Components/Mother';
import Condition from './Components/Condition';
import Fragments from './Components/Fragments';
import Higherorder from './Components/Higherorder';
import Higherorder2 from './Components/Higherorder2';
import HookuseState from './Components/HookuseState';
import HookuseEffect from './Components/HookuseEffect';



const App=()=>{
return (
<div>
{/* <BrowserRouter>
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
</BrowserRouter> */}




{/* <Reactfragment/> */}
{/* <Useeffect/>  */}
{/* <Httpcompl1/> */}
{/* <Class/> */}
{/* <Propss  name='mahmud'> i am children props</Propss> */}
{/* <State/> */}
{/* <EvenHandel/> */}
{/* <BindEvent/> */}
{/* <Setstate/> */}
{/* <Distructuring name='mahmud' city='rajshahi'/> */}
{/* <Mother/> */}
{/* <Condition/> */}
{/* <Fragments/> */}
{/* <Higherorder love='lamyaa'/>
<Higherorder2/> */}
{/* <Axioss/> */}
{/* <HookuseState/> */}
{/* <HookuseEffect/> */}



<Allpactics name='mahmud'  age='26' >i am child props, my age is </Allpactics>
</div> 
  )
}
export default App;
