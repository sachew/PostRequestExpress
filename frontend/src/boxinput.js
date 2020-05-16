import React from 'react';
import './App.css';

class Boxinput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input: "",
            submit: ""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit(event){
        // event.preventDefault()
        // this.setState({
        //     submit: this.state.input,
        //     input: ""
        // })
        // console.log(this.state.submit)
        var input = this.state.input
        var req = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({input})
        }
        var r = fetch("http://localhost:3001/api/input",req)
        console.log(r)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}

export default Boxinput