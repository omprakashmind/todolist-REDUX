import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo ,toggleTodo,setVisibilityFilter} from '../actions/index'
import {SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} from '../actions/actiontypes'
import {bindActionCreators} from 'redux'




class Table extends React.Component{
    render(){
        return(


            <div>
                       {this.props.todos.length!==0?( 
                                <table>

                                    <tbody>
                                        {this.props.todos.map(todo=>(
                                            <tr>
                                                <td>
                                                    {todo.text}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                       ):''}
                                    

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