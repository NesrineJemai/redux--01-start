const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0
}
//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER'){
        return {
 //Render the original object but overwrite the property 'counter'
            ...state,
            counter: state.counter + 1
        }
    }
        if (action.type === 'ADD_COUNTER'){
            return {
     //Render the original object but overwrite the property 'counter'
                ...state,
                counter: state.counter + action.value
            }
    }
    return state;
}
//Store
const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
//It's triggered whenever an anction is dispatched/the state is updated  
store.subscribe( () => {
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

