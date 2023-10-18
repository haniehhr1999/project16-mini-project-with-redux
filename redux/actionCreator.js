import {counterReset , counterDecrement , counterIncrement } from '../redux/actionTypes.js'
const incrementAction = ()=>{
    return{
        type : counterIncrement
    }
}
const decrementAction = ()=>{
    return{
        type : counterDecrement
    }
}
const resetAction = ()=>{
    return{
        type : counterReset
    }
} 
export {
    incrementAction , 
    decrementAction ,
    resetAction
}