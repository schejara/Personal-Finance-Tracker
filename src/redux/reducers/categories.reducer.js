 const initialState = {
    items:[],
 }

 const categoriesReducer = (state =initialState,action) => {
  switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                items: action.payload, 
            };
        default:
            return state;
    }

 }
 export default categoriesReducer;
