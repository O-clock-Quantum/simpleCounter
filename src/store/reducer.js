const defaultState = { oui: 1, non: 10 };

const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'VOTE':
      return {
        ...state,
        [action.name]: state[action.name] + 1,
      };
    case 'RESET':
      return defaultState;
    default:
      return state;
  }
};

export const onVote = name => ({
  type: 'VOTE',
  name,
});

export default reducer;
