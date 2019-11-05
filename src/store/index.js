import {createStore} from 'redux';
import getUserInfor from './reducer';
let store = createStore(getUserInfor);
export default store;

