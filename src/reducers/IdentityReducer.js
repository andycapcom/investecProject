const INITIAL_STATE = {
  name: "",
  surname: ""
};

const identityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
      ...state,
        name:action.payload
      };
    default:
      return state
  }
};

export default identityReducer
