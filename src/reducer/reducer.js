const iState = {
  dashboardData: [],
};

const reducer = (state = iState, action) => {
  if (action.type === "CHANGE_DASHBOARD_DATA") {
    return {
      ...state,
      dashboardData: action.payload,
    };
  }
  return state;
};

export default reducer;
