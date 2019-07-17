import React, {Component} from 'React'
import {Route, Switch} from  'react-router-dom'
import {Example1, Example2} from './components'   

   
/* Route exercise- adding Components*/

class Routes extends Component {
   constructor(){
       super()
       this.state={}
   }

render(){
   return(
       
{/* <Switch>
<Route path="/example1" component={Example1} />
<Route path="/example2" component={Example2} /> 
<Route path = "/examplesite/:name" component = {SinglePokemon} />

<Route component = {Examples} />
</Switch>  */}
       )
   } 
}
       

export default Routes