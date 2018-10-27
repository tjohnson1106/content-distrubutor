const initialState = {
  errors: null,
  distributions: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "DISTRIBUTIONS":
      return {
        ...state,
        distributions: action.distributions
      };
    case "DISTRIBUTIONS_ERROR":
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
}
