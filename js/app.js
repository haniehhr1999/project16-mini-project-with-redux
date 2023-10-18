console.log(Redux);
import {counterReset , counterDecrement , counterIncrement} from '../redux/actionTypes.js'
import {incrementAction , decrementAction , resetAction}from '../redux/actionCreator.js'
const add = document.querySelector('.add')
const decrese = document.querySelector('.decrese')
const reset = document.querySelector('.reset')
const number = document.querySelector('.number')
// REDUCER
let counterReduce = (state = 0 , action)=>{
    switch (action.type){
        case counterIncrement:{
            return state + 1
            break;
        }
        case counterDecrement:{
            return state - 1
            break;
        }
        case counterReset:{
            return 0
            break;
        }
        default:{
            return state
        }
    }
}
// STORE 
const store = Redux.createStore(counterReduce)
console.log(store);


add.addEventListener('click' , ()=>{
    store.dispatch(incrementAction())
    number.innerHTML = store.getState()
})
decrese.addEventListener('click' , ()=>{
    store.dispatch(decrementAction())
    number.innerHTML = store.getState()
})
reset.addEventListener('click' , ()=>{
    store.dispatch(resetAction())
    number.innerHTML = store.getState()
})