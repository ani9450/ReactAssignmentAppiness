import LOGIN from '../constant/index';


const getUser = (users) => ({
    type: LOGIN.GET,
    users
})

const loadData = ()=>({
    type : LOGIN.LOADDASHBOARD   
})

const setUser = (users) => ({
    type: LOGIN.SUBMIT,
    users,    
})

const loginSuccess = (users) => ({
    type: LOGIN.SUCCESS,
    users
})

export default {
    getUser,
    loginSuccess,
    setUser,
    loadData
}