import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ViewEmployeecomponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee:{}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeByID(this.state.id).then( res => {
            this.setState({employee : res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 ">
                    <h3 className = "text-center">Employee Detail</h3>
                    <div className = "card-body">
                        <div className ="row">
                            <label> First Name: </label>
                            <div>{this.state.employee.firstName}</div>
                        </div>

                        <div className = "row">
                            <label> Last Name: </label>
                            <div>{this.state.employee.lastName}</div>
                        </div>

                        <div className = "row">
                            <label> Email Address: </label>
                            <div>{this.state.employee.emailID}</div>
                        </div>

                        <div className = "row">
                            <label> Department: </label>
                            <div>{this.state.employee.department}</div>
                        </div>

                        <div className = "row">
                            <label> Age: </label>
                            <div>{this.state.employee.age}</div>
                        </div>

                        <div className = "row">
                            <label> Gender: </label>
                            <div>{this.state.employee.gender}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeecomponent;