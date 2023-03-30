/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nandani.usercrud.controller;

import com.nandani.usercrud.entity.Employee;
import com.nandani.usercrud.service.EmployeeService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nandani
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/user")
    private List<Employee> getAllUser() {
        return employeeService.getAllUser();
    }

    @GetMapping("/user/{userid}")
    private Employee getUser(@PathVariable("userid") int userid) {
        return employeeService.getUserById(userid);
    }
//creating a delete mapping that deletes a specified user  

    @DeleteMapping("/user/{userid}")
    private int deleteUser(@PathVariable("userid") int userid) {
        employeeService.delete(userid);
        return userid;
    }
    
//creating post mapping that post the user detail in the database  

    @PostMapping("/user")
    private Employee saveUser(@RequestBody Employee user) {
        employeeService.saveOrUpdate(user);
        return user;
    }
//creating put mapping that updates the user detail   

    @PatchMapping("/user/{userid}")
    private Employee update(@RequestBody Employee user, @PathVariable("userid") int userid) {
        System.out.println("User to update ========" + user);
        if(user.getId() == userid){
            employeeService.update(user, userid);
            return user;
        }
        else{
            return null;
        }
        
    }
}
