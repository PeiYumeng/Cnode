import React,{useState, useEffect} from 'react';
import { Link, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Pagination } from 'antd';

var url='https://cnodejs.org/api/v1/topics';
var flag = true;
function useFetch(url,flag){
    if(flag){
        let [data,setData] = useState([]);
        useEffect(()=>{
            fetch(url)
                .then(res=>res.json())
                .then(res=>{
                    setData(res.data)
                })
        })
        return data;
    }else{
        return;
    }
};
function check(url){
    if(url.indexOf('https://cnodejs.org/api/v1/topics/?tab=all')===0){
        flag = false;
    }
}
function onPageChange(page) { //page就是当前点击的页数
    url = 'https://cnodejs.org/api/v1/topics/?tab=all&page='+page;
    check(url);
}

function List(){
    
    let data = useFetch(url);
    // let data = check(url)
    return (
        <Router>
            <div className="liebiao">
                {
                    data.map((item)=><li key={item.id}>
                        <img src={item.author.avatar_url} alt={item.author.loginname} className="touxiang"/>
                        <span className="shu_1">{item.reply_count}</span>
                        <span className="shu_2">/{item.visit_count}</span>
                        {/* <Button type="link"  id="link_click_2">{item.tab}</Button> */}
                        <a>{item.title}</a>
                        <Link className="topic-title" to={'/topic/'+item.id}></Link>
                        <span className="time">2小时前</span>
                        <img src={item.author.avatar_url} alt={item.author.loginname} className="touxiang_2"/>
                        </li>)
                }
            </div>
            <div id="pages">
                <Pagination defaultCurrent={1} total={100} onChange={onPageChange}/>
            </div>
        </Router>
    )
}
export default List;
