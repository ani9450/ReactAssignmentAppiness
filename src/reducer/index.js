import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import dashBoardReducer from './dashBoardReducer';


const rootReducer = combineReducers({
    loginData : loginReducer,
    dashBoard : dashBoardReducer,   
})


export default rootReducer;