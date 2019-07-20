//src/service/UserService.js

import axios from 'axios';

class Users {
  static async addUser(users) {
    const resp =  await axios.post(`https://jsonplaceholder.typicode.com/users/`,{users});
    return resp.data;
  }

  static async single(id) {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return resp.data;
  }
}

export default Users;