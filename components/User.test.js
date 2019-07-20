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

 

// test('Should match: Jino', async(done) => {
//   axios.get.mockResolvedValue({
//    data:
//    {
//    "users": {
//        "name": "Jino"
//    } }
//    });
//   const r = await UserService.addUser({name: "Jino"});
   
//   //expect(r.name).toEqual("Jino")
//   console.log(r)
//   done()
// });



