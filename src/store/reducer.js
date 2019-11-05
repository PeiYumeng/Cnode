// import {combineReducers} from 'redux';
// import {ADD_ITEM,DEL_ITEM,CHANGE_VALUE} from '../actions/actionTypes'; 
let userInfor = {
    avatar_url:' ',  //头像
    loginname:' '   //昵称
}
export default function getUserInfor(state=userInfor,action){
    switch(action.type){
        case 'get_user_infor':
            console.log(action);
            return action.userInfor;
        default:
            return state;
    }
}

// export default combineReducers({
//     getUserInfor
// });