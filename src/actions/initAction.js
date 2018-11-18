export const initAction = (data) => dispatch => {
    dispatch({
        type: 'INIT',
        payload: data,
    })
}