import './App.css';
import React, { useState } from 'react'
import Axioss from './Components/Axioss';
import Propss from './Components/Propss';
import Reactfragment from './Components/Reactfragment';
import Useeffect from './Components/Useeffect';
import {BrowserRouter, Link, Route, Switch,NavLink } from 'react-router-dom';
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
import { DadaProvider } from './Components/Mycontext';
import Father from './Components/Father';
import Son from './Components/Son';
import Sonchild from './Components/Sonchild';
import { Dada } from './Components/Mycontext2';




// import Home from './Components/Home'
// import Base from './Components/Base'
// import About from './Components/About'

// const App = () => {
//   return (
//    <BrowserRouter>
//    <ul>
//      <li>
//        <Link to='/'>Home</Link>
//      </li>
//      <li>
//        <Link to='/About'>About</Link>
//      </li>
//      <li>
//        <Link to='/Base'>Base</Link>
//      </li>
//    </ul>
//    <Switch>
//      <Route exact path='/'><Home/></Route>
//      <Route exact path='/About'><About/></Route>
//      <Route exact path='/Base'><Base/></Route>
//    </Switch>
//    </BrowserRouter>
//   )
// }
// export default App


// const App = () => {
//   return (
//     <div>
//       <DadaProvider value='i am from dada to father to son to sonchild'>
//         <Father/>
//       </DadaProvider>
//        </div>
//   )
// }

// export default App




// const App = () => {
//   return (
//     <div>
//       <Dada value='rajshhai'>
//       <Father/>
//       </Dada>
      
      
//     </div>
//   )
// }

// export default App



import Home from './Components/Pages/Home';
import Base from './Components/Pages/Base';
import About from './Components/Pages/About';
import Not from './Components/Pages/Not';

const App = () => {
  return (
<BrowserRouter>
<ul>
  <li>
    
    <NavLink exact activeStyle={{color:'red'}} to ='/'>Home</NavLink>
  </li>
  <li>
    <NavLink  exact activeStyle={{color:'red'}} to ='/About'>About</NavLink>
  </li>
  <li>
    <NavLink  exact activeStyle={{color:'red'}} to ='/Base'>Base</NavLink>
  </li>
</ul>
<Switch>
  <Route exact path='/'><Home/></Route>
  <Route exact path='/About'><About/></Route>
  <Route exact path='/Base'><Base/></Route>
  <Route><Not/></Route>
</Switch>
</BrowserRouter>
  )
}

export default App





// const App = () => {
//   return (
//      <div>      
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
{/* <Allpactics name='mahmud' city='rajshahi'> i am child of props</Allpactics> */}

    {/* </div>
   )
 }
export default App */}





