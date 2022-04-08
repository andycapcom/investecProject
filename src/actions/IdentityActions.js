export const addName = name => (
  {
    type: 'CHANGE_NAME',
    payload: name,
  }
);

export const addSurname = name => (
  {
    type: 'CHANGE_SURNAME',
    payload: name,
  }
);
