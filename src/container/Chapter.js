import React, { Component } from 'react'

export default class Chapter extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:"",
            title:"",
            create_at:"",
            url:'https://cnodejs.org/api/v1/topic/',
        }
    }
    componentDidMount(){
        // 动态路由
        console.log(this.props)
        var id = this.props.match.params.id;
        this.setState({
            url:'https://cnodejs.org/api/v1/topic/'+id
        },function(){
            fetch(this.state.url)
            .then(res=>res.json())
            .then(res=>{
                console.log(res.data.content)
                this.setState({
                    data:res.data.content,
                    title:res.data.title,
                    create_at:res.data.create_at,
                })
            })
        })
    }

    render() {
        return (
            <div>
                <h1 dangerouslySetInnerHTML={{__html:this.state.title}}></h1>
                <p dangerouslySetInnerHTML={{__html:this.state.create_at}}></p>
                <div dangerouslySetInnerHTML={{__html:this.state.data}}></div>
            </div>
        )
    }
}

