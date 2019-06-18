import {
    CHANGE_SEARCH_TYPE,
    REQUEST_ROBOTS_LOADING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'; //Import for reducer, for type value


//This Initial State is the same thing as the normal "this.state declarations"
const initialStateSearch = {
    searchField: ''
}

//This is a reducer for searching robot. As the reducer import current states and actions
export const searchRobot = (state=initialStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_TYPE:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}


const initialStateRobot = {
    isLoading: true,
    robots: [],
    error: ''
}

//Reducer for requesting robots
export const requestRobots = (state = initialStateRobot, action={}) =>{
    switch(action.type){
        case REQUEST_ROBOTS_LOADING:
            return Object.assign({}, state, {isLoading: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isLoading: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isLoading: false})
        default:
            return state;
    }
}