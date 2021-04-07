export const getBoards = () => {
    return dispatch => {
      dispatch({ type: "LOADING" })
      fetch("http://localhost:3001/boards")
        .then(resp => resp.json())
        .then(boards => dispatch({ type: "SET_BOARDS", boards }))
    }
}

export const addBoard = (board, history) => {
    return dispatch => {
      fetch('http://localhost:3001/boards', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ board })
      })
        .then(resp => resp.json())
        .then(board => {
          dispatch({ type: "ADD_BOARD", board })
          history.push("/boards")
        })
    }
  }

  export const showBoard = (boardId) => {
    return dispatch => {
      fetch(`http://localhost:3001/boards/${boardId}`)
      .then(resp => resp.json())
      .then(board => dispatch({
        type: "SHOW_BOARD",
        board
      }))
    }
  }

  export const deleteBoard = (boardId) => {
    return (dispatch) => {
      return  fetch(`http://localhost:3001/boards/${boardId}`, {
        method: 'DELETE',
      })
      .then(resp => resp.json())
      .then(() => {
        dispatch({
        type: "DELETE_BOARD",
        boardId
        })
        
      })
    }
  }
  
  