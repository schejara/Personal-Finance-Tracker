const initialState = {
    items: [],
};

const transactionListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRANSACTION_LIST':
            return {
                ...state,
                items: action.payload, 
            };
        default:
            return state;
    }
};
export default transactionListReducer;