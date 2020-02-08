import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import userAction from '../../action/userAction'
import './dashboard.css';
class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const userArr = this.props.dashBoard.userArr;
        const loginData = this.props.loginData;
        return (<div>
            <div className="wrapper fadeInDown">
                {
                    loginData.isLogin ?
                        <div>
                            <h2 className="active"> DashBoard </h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Email</th>
                                        <th>Phone No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userArr.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phoneNo}</td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                        :
                        <div>
                            <h2 className="active"> Please Login Again !!! </h2>
                        </div>
                }

            </div>
        </div>)
    }
}

const mapStateToProps = ({ loginData, dashBoard }) => {
    return {
        loginData: loginData,
        dashBoard: dashBoard
    }
}

export default connect(
    mapStateToProps,
    null,
)(DashBoard);
