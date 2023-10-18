// creating reducer------------------------------------------
const reducer = (state , action)=>{
    switch(action.type){
        case 'ADD_TASKS':{
            return state
            break
        }
        default:{
            return state
        }
    }
}
// creating store--------------------------------------------
const createStore = ()=>{

    let state;

    function dispatch(action){
        state = reducer(state , action)
        return state
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
console.log(store);
console.log(store.getState());