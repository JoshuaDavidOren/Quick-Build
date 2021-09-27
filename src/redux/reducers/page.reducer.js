const pageReducer = (state = {}, action) => {
    switch (action.type) {
      case 'HOME':
        return action.payload;
      case 'INFO_PAGE':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default pageReducer;