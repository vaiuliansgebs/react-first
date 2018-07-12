export const initialState = {};
  
  /**
   * App Redux reducer.
   * Takes the current state of the Application and based on an Action
   * returns the new state of the application.
   * Doesn't mutates state, it creates a new object newState using
   * Object.assign({}, state, newState)
   *
   * @param {Object} [state=initialState] - Current state of the Application
   * @param {Object} action - An action
   * @returns {Object} newState of the Application.
   */
  const reducer = (state = initialState, action) => {
    
    let newState = null;
  
    switch (action.type) {
      case 'SOME_ACTION_TYPE':
        break;
      default:
        newState = state;
    }
  
    return newState;
  };
  
  export default reducer;