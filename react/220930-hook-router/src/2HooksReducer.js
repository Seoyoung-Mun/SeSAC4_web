import { useReducer } from "react";

function reducer( state, action ){ //2개의 인자를 받음
    switch ( action.type ){
        case "INCREMENT" :
            return {value: state.value + 1};
        case "DECREMENT" :
            return {value: state.value - 1};
            default:
                return state;
        
    }
}
const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {value : 0});
    //state는 reducer함수 인자의 state, 현재상태값= 초기값 {value:0}
    return (
        <div>
            <h1>{state.value}</h1>

            <button onClick={() => {dispatch({ type : "DECREMENT" })}}>-1</button>
            <button onClick={() => {dispatch({ type : "INCREMENT" })}}>+1</button>
        </div>
    )
}

export default Reducer;