const pageReducer = (state = {}, action) => {
    switch (action.type) {
      case 'HOME':
        return 1;
      case 'INFO_PAGE':
        return 2;
      default:
        return state;
    }
  };
  
  export default pageReducer;