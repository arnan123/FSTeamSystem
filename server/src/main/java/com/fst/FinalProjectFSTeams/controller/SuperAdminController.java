package com.fst.FinalProjectFSTeams.controller;

import com.fst.FinalProjectFSTeams.entities.Department;
import com.fst.FinalProjectFSTeams.entities.Team;
import com.fst.FinalProjectFSTeams.service.DepartmentService;
import com.fst.FinalProjectFSTeams.service.TeamService;
import com.fst.FinalProjectFSTeams.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/superadmin")
@CrossOrigin
public class SuperAdminController extends AdminController {
    @Autowired
    private UserService userService;

    @Autowired
    private DepartmentService departmentService;

    @GetMapping("/departments")
    public List<Department> readDepartments(){
        return departmentService.readDepartments();
    }

    @PostMapping("/addDepartment")
    public void addDepartment(@RequestBody Department department){
        departmentService.saveDepartment(department);
    }


}
