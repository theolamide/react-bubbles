import React from "react";
import { axiosWithAuth } from "./Utils/axiosWithAuth";

export default class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state ={
    credentials:{
      username: '',
      password: '',
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]:e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('login', this.state.credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      this.props.history.push('/');
    })
    .catch(err=>console.log(err));
  };


  render(){
      return (
        <div className="LoginForm"> 
                <h2>Login Page</h2>
                <form className = "row-container" onSubmit={this.login}>
                                        
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="username" 
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        />

                    <input 
                        type="text" 
                        name="password" 
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />
                                                

                    <button type="submit">
                        Login
                    </button> 
                </form>
            </div>
      );
    }
  };


