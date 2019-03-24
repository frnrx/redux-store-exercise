import API from 'goals-todos-api'

const RECEIVE_DATA = 'RECEIVE_DATA'

// synchronous action creator
function receiveDataAction(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  }
}

// asynchronous action creator
export function handleInitialData() {
  return (dispatch) => {
    Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([todos, goals]) => {
      dispatch(receiveDataAction(todos, goals))
    })
  }
}