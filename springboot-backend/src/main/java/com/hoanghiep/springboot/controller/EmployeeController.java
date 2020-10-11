package com.hoanghiep.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hoanghiep.springboot.exception.ResourceNotFoundException;
import com.hoanghiep.springboot.model.Employee;
import com.hoanghiep.springboot.repository.EmployeeRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//get all employee
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	//create rest api
	@PostMapping("/employees")
	public Employee saveEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	//get employee by id using rest api
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeByID(@PathVariable int id) {
		Employee em = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not existed with id: "+ id));
		return ResponseEntity.ok(em);
	} 
	
	//update employee using rest api
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id,@RequestBody Employee em_refer){
		Employee em = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: "+ id));
		em.setFirstName(em_refer.getFirstName());
		em.setLastName(em_refer.getLastName());
		em.setEmailID(em_refer.getEmailID());
		
		Employee updatedEmployee = employeeRepository.save(em);
		return ResponseEntity.ok(updatedEmployee); 
		
	}
	
	//delete employee rest api
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id){
		Employee em = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("employee not exit with id: "+ id));
		employeeRepository.delete(em);
		
		Map<String , Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
	
	
}
