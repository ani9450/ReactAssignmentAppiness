import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import userAction from '../../action/userAction'
import './login.css';
class Login extends Component {
    handleSubmit = (e) => {
        let obj = {};
        const form = e.target;
        const data = new FormData(form);
        for (var pair of data.entries()) {
            obj[pair[0]] = pair[1].toString();
            //console.log(pair[0] + ', ' + pair[1]);
        }
        if(this.checkCredential(obj)){
            this.props.successLogin({isLogin : true , user : obj});
            this.props.loadDashBoard();
            this.props.history.push('dashboard');
        }
        else{
            alert("Invalid Login !!!");
        }
        // this.props.history.push('dashboard');
        // 
        e.preventDefault();
    }
    // to comapre the credentials provided with validCred.
    checkCredential = (obj)=>{
        const validCred = { username : "hruday@gmail.com" , password : "hruday123"}
        if(validCred.username == obj.username.trim() && validCred.password == obj.password.trim()){
            return true;
        }
        return false;
    }

    render() {
        return (<div>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active"> Login page </h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="login" className="fadeIn second" name="username" placeholder="Username" />
                        <input type="text" id="password" className="fadeIn third" name="password" placeholder="Password" />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>

                </div>
            </div>
        </div>)
    }
}
const mapDispatchToProps = dispatch => ({
    // this will dispatch action to set isLogin true and will also contain the logged in user payload
    successLogin: (user) => dispatch(userAction.loginSuccess(user)), 
    // this will call dispatch action to load data to dashboard
    loadDashBoard: () =>dispatch(userAction.loadData())
});


export default connect(
    null,
    mapDispatchToProps,
)(Login);
