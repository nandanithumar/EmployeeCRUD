/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nandani.usercrud.repository;

import com.nandani.usercrud.entity.Employee;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author nandani
 */
public interface EmployeeRepository extends CrudRepository<Employee, Integer>  {

}
