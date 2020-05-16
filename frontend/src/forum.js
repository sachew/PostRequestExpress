//write forum component and post component
//only export forum component
//in render function of forum component create post components
//post component will have json object as a prop
//render all info of json object in this component
//in forum component fetch from backend (localhost:3001)
//map each json object to a post component
//render every post component in the div of forum
//make forum component in app.js
import React from 'react';
import './App.css';

class Forum extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            forumposts: []
        }
    }
    
    componentDidMount(){
        fetch("http://localhost:3001/api/forum", {mode: 'cors'}).then(response => response.json()).then(data => {
            this.setState({
                forumposts: data
            })
        })
    }

    render(){
        var allPosts = this.state.forumposts.map((post)=>{
            return(<Post post={post.post} uploader={post.uploader} upvotes={post.upvotes} downvotes={post.downvotes}/>)
        })
        return(
            <div>
                {allPosts}
            </div>
        )
    }
}

class Post extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="post">
                <h1>{this.props.post}</h1>
                <h2>Uploader: {this.props.uploader}</h2>
                <p>Upvotes: {this.props.upvotes}</p>
                <p>Downvotes: {this.props.downvotes}</p>
                <p>Comments: {this.props.comments}</p>
            </div>
            
        )
    }
}

export default Forum