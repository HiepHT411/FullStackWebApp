import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';


class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees : []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.removeEmployee = this.removeEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }
    
    componentDidMount(){
        EmployeeService.getEmployee().then((res)=>{
            this.setState({employees : res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee');

    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    removeEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            //reduce rest api call
            this.setState({employees : this.state.employees.filter(employee => employee.id !== id)});

        });
    }

    viewEmployee(id){
        this.props.history.push(`view-employee/${id}`);
    }

    render() {
        return (
            
            <div class = "container">
                <h2 className = "text-center">Employee List</h2>

                <div className = "button-add">
                    <button className = "btn btn-primary " onClick = {this.addEmployee}>Add Employee</button>
                </div>

                <div className = "row-table">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr class = "title">
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody className= "content">
                            {
                               this.state.employees.map(
                                employee => 
                                <tr key = {employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailID}</td>
                                    <td>
                                        <button onClick = {() => this.editEmployee(employee.id)} className = "btn btn-info">Update</button>
                                        <button style = {{marginLeft: "10px"}} onClick = {() => this.removeEmployee(employee.id)} className = "btn btn-danger">Delete</button>
                                        <button style = {{marginLeft: "10px"}} onClick = {() => this.viewEmployee(employee.id)} className = "btn btn-link">More...</button>
                                    </td>

                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
            
        );
    }
}

export default ListEmployeeComponent;