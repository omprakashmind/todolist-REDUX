const INITIAL_DATA=[]
const Todo=(state=INITIAL_DATA,action)=>{
    switch(action.type)
    {
        case 'ADD_TODO':
            let nextTodo={
                id:action.id,
                text:action.text,
                completed:false
            }
            return [...state,nextTodo]
        case 'TOGGLE_TODO':
            return state.map(todo=>
                todo.id===action.id ? {...todo,completed:!todo.completed}: todo
                );  
        case 'REMOVE_TODO':
        const numIndex=parseInt(action.id)
            return state.filter(todo=>todo.id!==numIndex);
        default:
            return state;
                 
    }
}

export default Todo;
