const iState = {
    loggedin:"",
    userData:[]
};
  
const reducer = (state = iState, action) => {
    if (action.type === "LOGIN_DATA") {
      return {
        ...state,
        loggedin: action.payload,
      };
    }
    if (action.type === "USER_DATA") {
      return {
        ...state,
        userData: action.payload,
      };
    } 
    return state;
  };
  
  export default reducer;