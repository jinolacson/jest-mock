Jest Mocking
> A simple test double's demonstration for async `axios` mocking using `jest` we use public api `https://jsonplaceholder.typicode.com` as dummy data


### Steps and Installation

1. Initialize project folder using `create-react-app`.
```
npx create-react-app your-folder-name
```

2. Install `axios` as dependency
```
npm install --save axios
```

3. Install necessary development dependencies for out test suite.
```
npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
```

4. Crate `src/components` folder inside project application folder and other necessary files.
```
your-project-name/
	src/
		__tests__/
			User.test.js
		components/
			service
				UserService.js
		UserComponent.js
```

5. Paste this example code as follows:

	**UserComponent.js**
	```
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

	```

	**UserService.js**
	```
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
	```

	**User.test.js**
	```
	//User.test.js
	import axios from 'axios';
	import UserService from './service/UserService';

	import { configure } from 'enzyme';
	import Adapter from 'enzyme-adapter-react-16';
	configure({ adapter: new Adapter() });

	jest.mock('axios');

	test('Should match: Leanne Graham', async(done) => {
	   axios.get.mockResolvedValue({data: {name: "Leanne Graham"}});
	   const r = await UserService.single(1)
	    
	   expect(r.name).toEqual("Leanne Graham")
	   console.log(r.name)
	   done()
	});

	```

6. Run you code using jest.
``
npm test
``

