const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (currElm) => currElm.objectID !== action.payload
        ),
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };
    case "PREV_BTN":
      let pageNum = state.page - 1;

      if (pageNum <= 0) {
        pageNum = 0;
      }

      return {
        ...state,
        page: pageNum,
      };
    case "NEXT_BTN":
      let pageNumInc = state.page + 1;

      if (pageNumInc > state.nbPages) {
        pageNumInc = 0;
      }

      return {
        ...state,
        page: pageNumInc,
      };
  }

  return state;
};

export default reducer;
