const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.playload;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
};

export default reducer;
