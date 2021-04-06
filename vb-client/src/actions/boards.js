export const getBoards = () => {
    return dispatch => {
      dispatch({ type: "LOADING" })
      fetch("http://localhost:3001/boards")
        .then(resp => resp.json())
        .then(boards => dispatch({ type: "SET_BOARDS", boards }))
    }
}

export const addBlog = (board, history) => {
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
  