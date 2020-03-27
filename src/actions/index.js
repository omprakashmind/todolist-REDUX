import {ADD_TODO,TOGGLE_TODO,DELETE_TODO,SET_VISIBILITY_FILTER} from './actiontypes'


let nexttodo=0

export const addTodo=text=>({
    type:'ADD_TODO',
    id:nexttodo++,
    text:text
})


export const toggleTodo=id=>({
    type:'TOGGLE_TODO',
    id:id
})

export const deleteTodo=id=>({
    type:'DELETE_TODO',
    id:id
})

export const setVisibilityFilter=filter=>({
    type:'SET_VISIBILITY_FILTER',
    filter
})

