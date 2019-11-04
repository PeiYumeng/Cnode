import React, { Component } from 'react';
import { Link,Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Ask from './Ask'
import Share from './Share'
import List from './List'
import Good from './Good'
export default class Home extends Component {
    state = {
        data: 'data'
    }
    getChildMessage (newData) {
        this.setState({
            data: newData
        })
    }
    c=(e)=>{   //改变按钮样式
        var l = e.currentTarget.parentElement.children.length;
        console.log(e.currentTarget.parentElement.children.length)
        for(var i=0;i<l;i++){
            e.currentTarget.parentElement.children[i].style.backgroundColor='#F0F0F0';
            e.currentTarget.parentElement.children[i].firstChild.style.color='#00AA00';
        }
        e.currentTarget.style.backgroundColor='#00FF00';
        e.currentTarget.firstChild.style.color='#ffffff';
        this.forceUpdate();
    }
    render() {
        return (
                <div>
                    <div className="link_top">
                        <div style={{ background: '#F0F0F0', padding: '6px 16px 6px'}}>
                            <button onClick={this.c}><Link to='/home/all'>全部</Link></button>
                            <button onClick={this.c}><Link to='/home/good'>精华</Link></button>
                            <button onClick={this.c}><Link to='/home/share'>分享</Link></button>
                            <button onClick={this.c}><Link to='/home/ask'>问答</Link></button>
                            <button onClick={this.c}><Link to='/home/'>招聘</Link></button>
                        </div>
                        <div>
                            <Route path='/home/all' component={List} />
                            <Route path='/home/ask' component={Ask} />    
                            <Route path='/home/good' component={Good} />
                            <Route path='/home/share' component={Share} />   
                        </div>
                    </div>
                </div>
        )
    }
}

