import React, { Component } from 'react'
import { Link, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import  store  from '../store' ;
export default class Signin extends Component {
    login(){
        fetch("https://cnodejs.org/api/v1/user/alsotang")
            .then(res=>res.json())
            .then(res=>{
                {
                    console.log(res.data);
                    store.dispatch({
                        type:'get_user_infor',
                        userInfor:{
                            avatar_url:res.data.avatar_url,
                            loginname:res.data.loginname
                        }
                    })
                    // props.history.push('/home/all')
                }
            })
    }
    render() {
        return (
            <div>
                <div className="topp">
                    <button><a href='/home/all'>全部</a></button>
                    <span>/登陆</span>
                </div>
                <div className="login">
                    用户名：<input type="text" name="username"/>
                    <br/>
                    密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="pwd" name="pwd"/>
                    <br/>
                    <Link to='/home/all'>
                        <input type="submit" value="登陆" id="lo" onClick={this.login}/>
                    </Link>
                    {/* <input type="submit" value="登陆" id="lo" onClick={this.login()}/> */}
                </div>     
            </div> 
        )
    }
}
// export default connect()(Signin);
