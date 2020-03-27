import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo ,toggleTodo,setVisibilityFilter} from '../actions/index'
import {SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} from '../actions/actiontypes'
import {bindActionCreators} from 'redux'




class Table extends React.Component{
    render(){
        return(


            <div>
                <ol>
                    <li className={(this.props.visibilityFilter===SHOW_ALL?'active':'')} onClick={()=>this.props.setVisibilityFilter(SHOW_ALL)}>ALL </li>
                    <li className={(this.props.visibilityFilter===SHOW_COMPLETED?'active' :'')} onClick={()=>this.props.setVisibilityFilter(SHOW_COMPLETED)}>COMPLETED </li>
                    <li className={(this.props.visibilityFilter===SHOW_ACTIVE?'active':'') } onClick={()=>this.props.setVisibilityFilter(SHOW_ACTIVE)}>ACTIVE</li>
                </ol>

                       {this.props.todos.length!==0?( 
                                <table>
                                    <tr>

                                  
                                       
                                        {this.props.todos.map(todo=>(
                                        <tr>
                                            
                                            <tr key={todo.id}>
                                                <td style={{textDecoration:todo.completed?'line-through':'none'}}>
                                                    {todo.text}{todo.completed===true?'(completed':" "}

                                                </td>
                                                <td>
                                            <span
                                            
                                            onClick={() => this.props.deleteTodo(todo.id)}
                                            style={{
                                                color: "white",
                                                fontSize: "20pt",
                                                marginRight: "20px"
                                            }}
                                            />
                                            <span
                                            className="fas fa-check-circle"
                                            onClick={() => this.props.toggleTodo(todo.id)}
                                            style={{ color: "white", fontSize: "20pt" }}
                                            />
                                        </td>
                                                <td>

                                                </td>
                                                
                                                  
                                                                
                                            </tr>
                                        </tr>
                                            
                                           
                                        ))}
                                         
                                     </tr>
                                </table>
                       ):' Nothing in the todolist add some'}
                                    

            </div>
    
        )
    }
}


const getVisibleTodos=(todos,filter)=>{
    switch(filter){
        case SHOW_ALL:
            return todos
        case SHOW_COMPLETED:
            return todos.filter(t=>t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t=>!t.completed);
        default:
                throw new Error("Wnknown Filter"+filter)                                   
    }
}

const mapStateToProps=state=>{
    return {todos:getVisibleTodos(state.todos,state.visible),
        visible:state.visible
    };
};

const mapDispatchtoProps=dispatch=>{
    return bindActionCreators(
        {
            deleteTodo,
            toggleTodo,
            setVisibilityFilter
        },
        dispatch
    )
}


export default connect(mapStateToProps,mapDispatchtoProps)(Table);