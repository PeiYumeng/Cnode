import React, { Component } from 'react'
// import { connect } from 'net';
import  store  from '../store' ;
export default class Sider extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(()=>{
            this.setState(store.getState())   //监听数据更新
        } )
        this.state = {
            none: [],
        }
    }

    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res=>res.json())
            .then(res=>{
                {
                    res.data.map((item)=>{
                        if(item.reply_count==0){
                            var none = [];
                            none = [...this.state.none,item.title];
                            this.setState({
                                none:none
                            })
                        }
                    })
                }
            })
    }
    render() {
        return (
            <div className="sider">
                <div className="s1">
                    <img src={store.getState().avatar_url} style={{width:'100px'}}></img>
                    <p dangerouslySetInnerHTML={{__html:store.getState().loginname}}></p>
                </div>
               <div className="s2">
                <img src='https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_' alt=''/>
                    <img src='https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS' alt=''/>
                    <img src='https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-' alt=''/>
               </div>
               <div className="s3">
                       <h4>无人回复的话题</h4>
                        <ul className="sss">
                            {
                                this.state.none.map((item,idx)=>
                                    <li key={idx}>
                                    {item}
                                    </li>)
                            }
                        </ul>
                    </div>
            </div>
        )
    }
}
// export default connect(
//     state=>(
//         {
//             userInfor:state.getUserInfor
//         }
//     )
// )(Slider2);