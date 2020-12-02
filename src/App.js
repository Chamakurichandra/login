
import React, { Component } from 'react'
import "./App.css";
import {connect} from "react-redux";
import  * as actions from "./actions/actions";
 class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      name: '',
      email: ''
    }
  }
  componentDidMount(){
    this.props.getProducts()
  }

  Login=()=>{
    if(this.state.name === this.state.data.username && this.state.email === this.state.data.email){
      this.setState({
        data:"login success"
      })
    }else{
      this.setState({
        data:"login fail"
      })
    }
  }

  nameHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  emailHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form className="log">
          <h2 style={{color:"blue",marginBottom:"1em" }}>Login to Home Page</h2>
          <div className="form-group">
          <input type="text" className="form-control" value={this.state.name} placeholder="Username" ref="uname" onChange={this.nameHandler}></input>
          </div>
          <div className="form-group">
          <input type="text" className="form-control" value={this.state.email} placeholder="Email" ref="pass" onChange={this.emailHandler}></input>
          </div>
          <div>
            <button onClick={this.Login} type="button" className="btn btn-warning btn-block text-primary">Login</button>
          </div>
        </form>
          {this.props.data.map((element,index)=>(
            <div key={index}>
              <div>
              {element.username}
              </div>
              {element.email}
           </div>
          ))}
          {this.state.data}
      </div>
    )
  }
}
const receive=(state)=>{
  return{
    data:state.data
    
}
}
const send=(dispatch)=>{
  return{
    getProducts:()=>{ dispatch(actions.getProducts()) }
    
  }
}
export default connect(receive,send)(App);