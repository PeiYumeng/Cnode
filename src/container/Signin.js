import React, { Component } from 'react'
import { Link, Route ,Redirect} from 'react-router-dom';
export default class Signin extends Component {
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
                        <input type="submit" value="登陆" id="lo"/>
                    </Link>
                </div>     
            </div> 
        )
    }
}
