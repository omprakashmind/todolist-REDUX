import React from 'react'
import {connect} from 'react-redux'
import {addtodo} from '../actions/index'
import {bindActionCreators} from 'redux'



class ADDTODO extends React.Component{
      constructor(props)
      {
          super(props)
          this.state={
              todotext:''
          }
      }

      onChangeValue=(event)=>{
          this.setState({
              [event.target.name]:event.target.value
          })
          
      }

      addValue=(event)=>{
          this.props.addtodo(this.state.todotext)
          this.setState({
              todotext:''
          })
        
      }


    render() {

        return(
            <div>

               <input type="text" name="todotext" value={this.state.todotext} onChange={this.onChangeValue}/>
               <button onClick={this.addValue}>ADD VALUE</button>

            </div>
        )

    }

}




const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        addtodo
    },dispatch)
}




export default connect(null,mapDispatchToProps)(ADDTODO)










