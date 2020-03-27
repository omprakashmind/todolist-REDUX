import {combineReducers} from 'redux'
import todos from './Todo'
import visible from './VisibilityFilter'


export default combineReducers({
    todos,
    visible
})






