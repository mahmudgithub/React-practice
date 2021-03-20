// import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// // import Country from '../PacticsFive/Country'
// import CountryDetails from '../PacticsFive/CountryDetails'
// import Home from '../PacticsFive/Home'
// // import Extra from '../PacticsFive/Extra'
// // import MorePactics from '../PacticsFive/MorePactics'
// // import SearchFilter from '../PacticsFive/SearchFilter'
// // import SearchFIlter2 from '../PacticsFive/SearchFIlter2'

// const Connector5 = () => {
//     return (
// <BrowserRouter>
// <Switch>
//     <Route exact path='/'><Home/></Route>
//     <Route path="/country/:countryName"><CountryDetails></CountryDetails></Route>
  





//             {/* <SearchFilter/> */}
//             {/* <SearchFIlter2/> */}
//             {/* <MorePactics/> */}
//             {/* <Extra/> */}
       
    
// </Switch>
// </BrowserRouter>
//     )
// }

// export default Connector5














import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Page1 from '../PacticsFive/Page1'
import Page2 from '../PacticsFive/Page2'
import Page3 from '../PacticsFive/Page3'
import Home from '../PacticsFive/Home'
import Not from '../PacticsFive/Not'

const Connector5 = () => {
    return (
<BrowserRouter>
<ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/Page1'>Page1</Link></li>
    <li><Link to='/Page2'>Page2</Link></li>
    <li><Link to='/Page3'>Page3</Link></li>
</ul>
<Switch>
    <Route exact path='/'>{Home}</Route>
    <Route exact path='/Page1'>{Page1}</Route>
    <Route exact path='/page2'>{Page2}</Route>
    <Route exact path='/page3/:user'>{Page3}</Route>
    <Route ><Not/></Route>
</Switch >
</BrowserRouter>



    )
}

export default Connector5
