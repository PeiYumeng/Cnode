import React from 'react';
import {Link} from 'react-router-dom';
import { Route ,Redirect} from 'react-router-dom';
import { Icon } from 'antd';
import Chapter from '../container/Chapter'
export default function Header(){
    return <div className="headerwrap">
                <header>
                    <img src='https://static2.cnodejs.org/public/images/cnodejs_light.svg' alt=''/>
                    <div className="input_style">
                        <Icon type="monitor" style={{float:'left',margin:'4px 10px 0px 10px'}}/>
                        <input type="search"/>
                    </div>
                    <div style={{float:'right',lineHeight:'50px'}}>
                        <Link to='/home/all'>首页</Link>
                        <Link to='/start'>新手入门</Link>
                        <Link to='/api'>API</Link>
                        <Link to='/about'>关于</Link>
                        <Link to='/home'>注册</Link>
                        <Link to='/signin'>登陆</Link>
                    </div>
                    {/* <Redirect from = '/'  to = '/home' /> */}
                </header>
            </div>
}