import * as TodoConstants from '../actions/TodoActions';

const TodoReducer = (todoList = [], action) => {
    switch(action.type){
        case TodoConstants.TODO_CREATE:
            return [
                ...todoList,
                {
                    id: Date.now(),
                    isChecked: false,
                    description: action.description
                }
            ]
        
        case TodoConstants.TODO_REMOVE:
            // return todoList.filter((item)=> item.id !== action.id );
            const itemIntdex = todoList.findIndex((item)=> item.id === action.id);
            return [...todoList.slice(0, itemIntdex), ...todoList.slice(itemIntdex + 1)]
        
        case TodoConstants.TODO_UPDATE:
            return todoList.map(item => {
                if(item.id === action.id) {
                    return action.item
                }
                return item;
            })

        case TodoConstants.TODO_CLEAR:
            return todoList.filter((item) => !item.isChecked );

        default: return todoList;
    }
}

export default TodoReducer;