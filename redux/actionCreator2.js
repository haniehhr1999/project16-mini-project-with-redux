import {toDo_Add , toDo_FILTER_INCOMPLETE , toDo_FILTER_COMPLETE , toDo_FILTER_ALL , toDo_EDIT , toDo_Do , toDo_Remove} from './actionTypes2.js'
function add_todo_func(value){
    return{
        type: toDo_Add ,
        title: value
    }
}
function remove_todo_func(id){
    return{
        type: toDo_Remove ,
        id: id
    }
}
function edit_todo_func(){
    return{
        type: toDo_FILTER_ALL
    }
}
function do_todo_func(id){
    return{
        type: toDo_Do ,
        id : id
    }
}
function filter_all_todo_func(){
    return{
        type: toDo_EDIT
    }
}
function filter_complete_todo_func(){
    return{
        type: toDo_FILTER_COMPLETE
    }
}
function filter_incomplete_todo_func(){
    return{
        type: toDo_FILTER_INCOMPLETE
    }
}

export{
    add_todo_func,
    remove_todo_func,
    edit_todo_func,
    do_todo_func,
    filter_all_todo_func,
    filter_complete_todo_func,
    filter_incomplete_todo_func
}