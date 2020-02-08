import LOGIN from '../constant/index';
import * as userData from '../constant/userData.json';

const dashBoardReducer = (state ={}, action) => {
    console.log(" userReducer action --", action)
    switch (action.type) {

        case LOGIN.LOADDASHBOARD:
            const parsedData = userData;
            console.log("parsedData --", parsedData.default);
             state.userArr = parsedData.default;
             return {...state}


        default:
            return {...state}
    }
}

export default dashBoardReducer;