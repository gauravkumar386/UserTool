import React, { Component } from "react";
import { connect } from "react-redux";
import "./LoginComponent.scss";

class LoginComponent extends Component{
    state={
        username:"",
        password:"",
        isDisabled:true
    }

    componentDidUpdate=()=>{
        if(this.state.isDisabled && this.state.username && this.state.password){
            this.setState({isDisabled:false})
        }else if(!this.state.isDisabled && (!this.state.username || !this.state.password)){
            this.setState({isDisabled:true})
        }
    }

    onChangeHandler=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit=()=>{
        let data={
            "username":"hruday@gmail.com",
            "password":"hruday123"
        }
        let userData=[{
            "id":1,
            "name":"test1",
            "age":"11",
            "gender":"male",
            "email":"test1@gmail.com",
            "phoneNo":"9415346313"
            },{
            "id":2,
            "name":"test2",
            "age":"12",
            "gender":"male",
            "email":"test2@gmail.com",
            "phoneNo":"9415346314"
            },{
            "id":3,
            "name":"test3",
            "age":"13",
            "gender":"male",
            "email":"test3@gmail.com",
            "phoneNo":"9415346315"
            },{
            "id":4,
            "name":"test4",
            "age":"14",
            "gender":"male",
            "email":"test4@gmail.com",
            "phoneNo":"9415346316"
            },{
            "id":5,
            "name":"test5",
            "age":"15",
            "gender":"male",
            "email":"test5@gmail.com",
            "phoneNo":"9415346317"
            },{
            "id":6,
            "name":"test6",
            "age":"16",
            "gender":"male",
            "email":"test6@gmail.com",
            "phoneNo":"9415346318"
            },]

        if(this.state.username===data.username && this.state.password===data.password){
            this.props.loginData(true);
            this.props.userData(userData)
        }else{
            alert("wrong credentials")
        }
    }

    render(){
        return(
            <div className="form-data">
                <div className="form-header">
                    User Login
                </div>
                <div className="input-username">
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.onChangeHandler}/>
                </div>
                <div className="input-username">
                    <label>Password:</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                </div>
                {this.state.isDisabled ? <div className="submit-btn disabled">
                    <div className="btn-text">Login</div>
                </div> :
                <div className="submit-btn" onClick={this.handleSubmit}>
                    <div className="btn-text">Login</div>
                </div>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loginData: (data) => {
        dispatch({ type: "LOGIN_DATA", payload: data });
      },
      userData: (data) => {
        dispatch({ type: "USER_DATA", payload: data });
      },
    };
  };
  
export default connect(null, mapDispatchToProps)(LoginComponent);