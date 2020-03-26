let nexttodo=0

export const addtodo=text=>({
    type:'ADD_TODO',
    id:nexttodo++,
    text
})


export const toggletodo=id=>({
    type:'TOGGLE_TODO',
    id
})

