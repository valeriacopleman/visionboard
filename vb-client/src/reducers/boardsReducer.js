const initialState = {
    boards: [],
    loading: true
  }
  
  const boardsReducer = (state=initialState, action) => {
    switch(action.type) {
      case "LOADING":
        return {
          ...state,
          loading: true
        }
      case "SET_BOARDS":
        return {
          ...state,
          loading: false,
          boards: action.boards
        }
      case "ADD_BOARDS":
        return {
          ...state,
          boards: [...state.boards, action.boards]
        }
      default:
        return state;
    }
  }
  
  export default boardsReducer;