function balanceReducer (state=0, action){
    if (action.type === 'DEPOSIT'){
        // return {balance : state.balance + Number(action.balance)};
        return state + Number(action.balance);
    } else if (action.type === 'WITHDRAW'){
        // return {balance : state.balance - Number(action.balance)};
        return state - Number(action.balance);
    }
    return state;
}

export default balanceReducer;