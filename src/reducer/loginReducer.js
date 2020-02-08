import LOGIN from '../constant/index';


const loginReducer = (state = { isLogin: false, user: {} }, action) => {
    console.log(" userReducer action --", action)
    switch (action.type) {
        case LOGIN.SUCCESS:
        case LOGIN.SUBMITSUCCESS:
            return { ...action.users }
       
        default:
            return { ...state }
    }
}

export default loginReducer;