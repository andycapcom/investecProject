export const addTask = (title, done, id) => (
  {
    type: 'ADD_TASK',
    payload: { title, done, id },
  }
);
