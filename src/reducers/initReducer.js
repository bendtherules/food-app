export default (state = {}, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}