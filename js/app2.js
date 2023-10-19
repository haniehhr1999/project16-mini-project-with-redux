import {toDo_Add , toDo_FILTER_ALL , toDo_FILTER_COMPLETE , toDo_FILTER_INCOMPLETE , toDo_EDIT , toDo_Remove , toDo_Do} from '../redux/actionTypes2.js'
import {add_todo_func , remove_todo_func , filter_all_todo_func , filter_incomplete_todo_func , filter_complete_todo_func ,do_todo_func , edit_todo_func } from '../redux/actionCreator2.js'

const input  = document.querySelector('input')
const select = document.querySelector('select')
const ul = document.querySelector('ul')

const btnAdd = document.querySelector('.add')


const todoListReducer= (state = [] , action) =>{
    switch(action.type){
        case toDo_Add:{
            console.log(action);
            let copyState = [...state]
            let newToDoObj = {
                id: crypto.randomUUID(),
                title: action.title , 
                isComplete: false
            }
            copyState.push(newToDoObj)
            return copyState
            break
        }
        case toDo_Remove:{
            let copyState = [...state]
            let newState = copyState.filter((item)=> item.id !== action.id)
            return newState
            break
        }
        case toDo_Do:{
            let copyState = [...state]
            console.log(action.id);

            copyState.some((todo)=> {
                if (todo.id === action.id) {
                    todo.isComplete = !todo.isComplete
                }
            })
            return copyState
            break
        }
        case toDo_EDIT:{
            return state
            break
        }
        case toDo_FILTER_INCOMPLETE:{
            return state
            break
        }
        case toDo_FILTER_COMPLETE:{
            return state
            break
        }
        case toDo_FILTER_ALL:{
            return state
            break
        }
        default :{
            return state
        }
    }
}
const store = Redux.createStore(todoListReducer)
console.log(store);
// add tasks
btnAdd.addEventListener('click' , ()=>{
    const newToDoTitle = input.value.trim()
    store.dispatch(add_todo_func(newToDoTitle))

    const todos = store.getState()
    input.value = ''
    showToDom(todos)
    console.log(todos);
})
// delete tasks
const deleteElementHandler =(todoId)=>{
    store.dispatch(remove_todo_func(todoId))
    const todos = store.getState()
    showToDom(todos)
}

const doElementHandler =(todoId)=>{
    alert(todoId)
    store.dispatch(do_todo_func(todoId))
    const todos = store.getState()
    showToDom(todos)
}
// show Elements to dom 
function showToDom(todos){
    ul.innerHTML =''
    todos.forEach(todoitem => {
        // const lis = document.createElement('li')
        ul.innerHTML += `
                    <li class="${todoitem.isComplete ? 'complete d-flex': 'd-flex'}">
                        <div>${todoitem.title}</div>
                        <div>
                            <button class="delete" onClick=deleteElementHandler("${todoitem.id}")>
                                <span class="material-symbols-outlined">delete</span>
                            </button>
                            <button class="edit">
                                <span class="material-symbols-outlined">edit</span>
                            </button>
                            <button class="done" onClick=doElementHandler("${todoitem.id}")>
                                <span class="material-symbols-outlined">done</span>
                            </button>
                        </div>
                    </li>
        `
        // ul.appendChild(lis)
    });
}
window.deleteElementHandler = deleteElementHandler
window.doElementHandler = doElementHandler

