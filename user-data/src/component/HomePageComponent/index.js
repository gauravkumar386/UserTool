import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomePageComponent.scss";
import DashboardComponent from "../DashboardComponent";
import LoginComponent from "../LoginComponent";

class HomePageComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <div className="homepage">
                    {!this.props.isLoggedin ?
                    <LoginComponent/> :
                    <DashboardComponent/>}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedin:state.loggedin
    };
};

export default connect(mapStateToProps)(HomePageComponent);