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
      case "SHOW_BOARD":
        return {
          ...state,
          showBoard: action.board
        }
      case "ADD_BOARDS":
        return {
          ...state,
          boards: [...state.boards, action.board]
        }
        case "DELETE_BOARD":
          return {
            ...state,
            boards: [...state.boards.filter(board => board.id !== action.boardId)]
          }
      default:
        return state;
    }
  }
  
  export default boardsReducer;