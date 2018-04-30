const initialState = {
    counter: 7
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') { 
        return {
            counter: state.counter + 1
        };
      
    };
    return state;
};

export default reducer;
