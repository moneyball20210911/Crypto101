import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
const User = props => (
    <tr>
        <td className = "address-list">{props.user.address}</td>
        <td className = "email-list">{props.user.email}</td>
    </tr>
)

export default class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    getData () {
        axios.post(process.env.REACT_APP_PROXY + `/api/get/user`).then( res => {
            
            if (res && res.data) {
                const data = res.data;
                if (data.status==='ok') {
                    this.setState({
                        users: data.data
                    })
                } else {
                    this.setState({
                        users: []
                    })
                }
            }
        })
        .catch( err => console.log(err));
    }
    componentDidMount() {
        this.getData()
    }

    componentDidUpdate() {
        this.getData()
    }

    userList = () => this.state.users.map(
        (user, index) => <User user={user} key={index} />
    )
    render() {
        return(
            <div id = "User-List">
                <div className = "custom-logo"><img src = "../../img/custom-logo.png" width = "10%" /></div>
                <div className = "Data-title">Customers List</div>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>ADDRESS</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.userList() }
                    </tbody>
                </table>
                <div className = "custom-footer">© Copyright 2021  - All Rights Reserved || Moneyball Team Admin</div>
            </div>
        )
    }
}