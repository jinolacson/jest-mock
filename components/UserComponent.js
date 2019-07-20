//UserComponent.js
import React, { Component } from 'react'
import UserService from './service/UserService';

class UserComponent extends Component {

  constructor(){
    super()

    this.state = {
      name : ""
    }
  }

  getUser = async() => {

    try {
      const response = await UserService.addUser({
        name: "Jino"
      });
      
      this.setState({
        name : response.users.name
      });

      console.log(response)
    } catch (e) {
       
      this.setState({
        name : e
      });
    }    
  }

  render() {
    return (<div><button onClick={this.getUser}>Add new User</button></div>)
  }
}

export default UserComponent;
