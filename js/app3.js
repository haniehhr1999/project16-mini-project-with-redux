// creating reducer------------------------------------------
const reducer = (state =[] , action)=>{
    switch(action.type){
        case 'ADD_TASKS':{
            let newToDo ={
                id: crypto.randomUUID() ,
                title : action.title
            } 
            return [ ...state, newToDo]
            break
        }
        case 'REMOVE_TASKS':{
            let newToDo =[...state].filter(item => item.title !== action.title)
            return newToDo
            break
        }
        default:{
            return state
        }
    }
}
// creating store--------------------------------------------
const createStore = (reducer)=>{

    let state;

    function dispatch(action){
        state = reducer(state , action)
        // return state
    }
    function getState(){
        return state
    }
    return {
        dispatch,
        getState
    }
}
// access to created store & function call-------------------
let store = createStore(reducer)
store.dispatch({
    type : 'ADD_TASKS' , 
    title : 'Learn JS'
})
store.dispatch({
    type : 'ADD_TASKS' , 
    title : 'Learn typescript'
})
store.dispatch({
    type : 'REMOVE_TASKS' , 
    title : 'Learn JS'
})
console.log(store);
console.log(store.getState());