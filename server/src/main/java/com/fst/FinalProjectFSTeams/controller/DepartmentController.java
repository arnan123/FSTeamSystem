package com.fst.FinalProjectFSTeams.controller;

import com.fst.FinalProjectFSTeams.entities.Department;
import com.fst.FinalProjectFSTeams.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/department")
@CrossOrigin
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @GetMapping("/view")
    public List<Department> readDepartments(){
        return departmentService.readDepartments();
    }

    @GetMapping("/view/{deptId}")
    public Optional<Department> readDepartment(@PathVariable Integer deptId){
        return departmentService.readDepartment(deptId);
    }

    @PostMapping("/addDepartment")
    public void addDepartment(@RequestBody Department department){
        departmentService.saveDepartment(department);
    }

    @DeleteMapping("/deleteDepartment/{deptId}")
    public void deleteDepartment(@PathVariable Integer deptId){
        departmentService.deleteDepartment(deptId);
    }

    @PutMapping("/assignApprover/{deptId}/{approverId}")
    public void assignApproverToDepartment(@PathVariable Integer deptId, @PathVariable Integer approverId){
        departmentService.assignApproverToDepartment(deptId,approverId);
    }
}
