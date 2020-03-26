import React from 'react'
import {connect} from 'react-redux'
import {addtodo} from '../actions/index'


class ADDTODO extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            message:''
        }
    }


    changeValue=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    sendValue=(dispatch)=>{
        dispatch(addtodo(this.state.message))


    }

    render(){
        return(
            
            <div>


                <h1>ADD TASK IN TO DO LIST</h1>

                <input type="text" name="message" value={this.state.message} onChange={this.changeValue} />
                <button onClick={this.setValue}>SEND</button>


            </div>
        )
    }


}


export default ADDTODO;










