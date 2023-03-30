/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nandani.usercrud.service;

import com.nandani.usercrud.entity.Employee;
import com.nandani.usercrud.repository.EmployeeRepository;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author nandani
 */

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;
//getting all user record by using the method findaAll() of CrudRepository  

    public List<Employee> getAllUser() {
        System.out.println("Get All Users called++++++++++++++++++++++++++++++++++++++++");
        List<Employee> user = new ArrayList<Employee>();
        Iterator<Employee> iterator = employeeRepository.findAll().iterator();
        while (iterator.hasNext()) {
            Employee user1 = iterator.next();
            user.add(user1);
        }
        for(Employee u1 : user){
            System.out.println(u1);
        }
        return user;
    }
//getting a specific record by using the method findById() of CrudRepository  

    public Employee getUserById(int id) {
        return employeeRepository.findById(id).get();
    }
//saving a specific record by using the method save() of CrudRepository  

    public void saveOrUpdate(Employee user) {
        employeeRepository.save(user);
    }
//deleting a specific record by using the method deleteById() of CrudRepository  

    public void delete(int id) {
        employeeRepository.deleteById(id);
    }
//updating a record  

    public void update(Employee user, int id) {
        employeeRepository.save(user);
    }
}
