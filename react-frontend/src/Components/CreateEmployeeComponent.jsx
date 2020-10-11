import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';


class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName : '',
            emailID : '',
            department: '',
            age: '',
            gender: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIDHandler = this.changeEmailIDHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);

        this.saveEmployee = this.saveEmployee.bind(this);

    }

    changeFirstNameHandler = (event)=>{
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event)=>{
        this.setState({lastName: event.target.value});
    }

    changeEmailIDHandler = (event)=>{
        this.setState({emailID: event.target.value})
    }

    changeDepartmentHandler = (event)=>{
        this.setState({department: event.target.value});
    }

    changeAgeHandler = (event)=>{
        this.setState({age: event.target.value});
    }

    changeGenderHandler = (event) =>{
        this.setState({gender: event.target.value});
    }

    saveEmployee = (e) => {
        e.preventDefault();
        
        let employee = {firstName: this.state.firstName, lastName : this.state.lastName, emailID: this.state.emailID
                        ,department: this.state.department, age: this.state.age, gender: this.state.gender};

        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        })
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <h2>Employee Form</h2>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add Employee</h3>
                        <div className= "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> First Name: </label>
                                    <input placeholder = "First Name" name = "firstName" className = "form-control"
                                            value = {this.state.firstName} onChange = {this.changeFirstNameHandler}/>
                                </div>

                                <div className = "form-group">
                                    <label> Last Name: </label>
                                    <input placeholder = "Last Name" name = "lastName" className ="form-control"
                                            value = {this.state.lastName} onChange = {this.changeLastNameHandler}/>
                                </div>

                                <div className = "form-group">
                                    <label> Email Address: </label>
                                    <input placeholder = "Email Address" name = "emailID" className = "form-control"
                                            value = {this.state.emailID} onChange = {this.changeEmailIDHandler}/>
                                </div>

                                <div className = "form-group">
                                    <label> Department: </label>
                                    <input placeholder = "employee's department" name = "department" className = "form-control"
                                        value = {this.state.department} onChange = {this.changeDepartmentHandler}/>
                                </div>

                                <div className = "form-group">
                                    <label>Age: </label>
                                    <input placeholder = "employee's age" name = "age" className = "form-control"
                                        value = {this.state.age} onChange = {this.changeAgeHandler}/>
                                </div>

                                <div className = "form-group">
                                    <label> Gender: </label>
                                    <input placeholder = "employee's gender" name = "gender" className = "form-control"
                                        value = {this.state.gender} onChange = {this.changeGenderHandler}/>
                                </div>


                                <button className = "btn btn-success" onClick = {this.saveEmployee}>Save</button>
                                <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft : "10px"}}>Cancel</button>
                            

                            </form>
                        </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;