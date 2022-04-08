const INITIAL_STATE = [];

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          task:action.payload.title,
          done: action.payload.done,
          id:action.payload.id
        }
      ]
    default:
      return state
  }
};

export default taskReducer
