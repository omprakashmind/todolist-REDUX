import {ADD_TODO,TOGGLE_TODO,DELETE_TODO,SET_VISIBILITY_FILTER} from './actiontypes'


let nexttodo=0

export const addtodo=text=>({
    type:'ADD_TODO',
    id:nexttodo++,
    text:text
})


export const toggletodo=id=>({
    type:'TOGGLE_TODO',
    id:id
})

export const deletetodo=id=>({
    type:'DELETE_TODO',
    id:id
})

export const setvisibilityfilter=filter=>({
    type:'SET_VISIBILITY_FILTER',
    filter
})

