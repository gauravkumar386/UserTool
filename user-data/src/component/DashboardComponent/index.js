import React, { Component } from "react";
import { connect } from "react-redux";
import "./DashboardComponent.scss";

class DashboardComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="dashboard">
                {this.props.userData && 
                <div className="dashboard-data">
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        {this.props.userData.map((data)=>{
                            return(
                                <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.gender}</td>
                                <td>{data.email}</td>
                                <td>{data.phoneNo}</td>
                                </tr>
                            ) 
                        })}
                    </table>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData:state.userData
    };
};

export default connect(mapStateToProps)(DashboardComponent);