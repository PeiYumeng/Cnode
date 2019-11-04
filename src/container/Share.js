import React, { Component } from 'react';
import { Pagination } from 'antd';
import {Link} from 'react-router-dom';
export default class Share extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            url:'https://cnodejs.org/api/v1/topics/?tab=share'
        }
    }    
    componentDidMount(){
        fetch(this.state.url)
        .then(res=>res.json())
        .then(res=>{
            {
                res.data.map((item)=>{
                    this.setState({
                        data:res.data
                    })
                })
            }
        })
    }
    onPageChange=(page)=> { //page就是当前点击的页数
        var url = 'https://cnodejs.org/api/v1/topics/?tab=share&page='+page;
        this.setState({
            url : url
        },function(){
            fetch(this.state.url)
            .then(res=>res.json())
            .then(res=>{
                {
                    res.data.map((item)=>{
                        this.setState({
                            data:res.data
                        })
                    })
                }
            })
        })
    }
    render() {
        return (
            <div>
                <ul>
                <div className="liebiao">
                            {
                                this.state.data.map((item,idx)=>
                                    <li key={idx}>
                                        <img src={item.author.avatar_url} alt={item.author.loginname} className="touxiang"/>
                                        <span className="shu_1">{item.reply_count}</span>
                                        <span className="shu_2">/{item.visit_count}</span>
                                        {/* <Button type="link"  id="link_click_2">{item.tab}</Button> */}
                                        <Link className="topic-title" to={'/topic/'+item.id}>
                                        {item.title}
                                        </Link>
                                        {/* <Link className="topic-title" to={'/topic/'+item.id}></Link> */}
                                        <span className="time">2小时前</span>
                                        <img src={item.author.avatar_url} alt={item.author.loginname} className="touxiang_2"/>
                                    </li>)
                            }
                            </div>
                        </ul>
                        <div id="pages">
                            <Pagination defaultCurrent={1} total={100} onChange={this.onPageChange}/>
                        </div>
            </div>
        )
    }
}
