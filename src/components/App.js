import React from 'react';
import ADDTODO from '../containers/Addtodo'
import TABLE from '../containers/CreateTodo'



class App extends React.Component{


   render(){
       return(
        
           <div>
               <ADDTODO/>
               <TABLE/>
           </div>
           

           
       )
   }
}


export default App;

