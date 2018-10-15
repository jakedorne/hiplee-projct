import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import './App.css';

import {getUsers, getUser} from './actions/users';

class App extends Component {

  getUsers() {
    this.props.getUsers()
  }

  getUser(id) {
    this.props.getUser(id)
  }

  renderUserDetails (user) {
    return (
      <div className = {"userDetails"}>
        <img style={{borderRadius: 64}}src={user.avatar} />
        <h1>{user.first_name} {user.last_name}</h1>
      </div>
    )
  }

  renderUserButtons(users) {
    return (
      <div className={"usersContainer"}>
        {this.props.users.map((user, key) => {
          return (
            <Button style={{flex: 1, margin: 10}} onClick={() => {this.getUser(user.id)}}>User {user.id}</Button>
          )
        })}
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    return (
      <div className="App">
          <Button onClick={() => this.getUsers()} >Make Ajax Request</Button>
          {this.props.users && this.renderUserButtons(this.props.users)}
          {this.props.user && this.renderUserDetails(this.props.user)}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      users: state.users.users,
      user: state.users.user
    }
}

const mapDispatchToProps = {
  getUser,
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
