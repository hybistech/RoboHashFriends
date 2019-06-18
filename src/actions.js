import {
    CHANGE_SEARCH_TYPE,
    REQUEST_ROBOTS_LOADING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

//Action for the search field
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_TYPE,
    payload: text
}); //note: This is an object that return with brakets



//Action for the robots request
export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_LOADING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
} //Note: This is a function
