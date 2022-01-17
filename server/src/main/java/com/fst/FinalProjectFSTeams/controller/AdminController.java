package com.fst.FinalProjectFSTeams.controller;

import com.fst.FinalProjectFSTeams.entities.User;
import com.fst.FinalProjectFSTeams.service.TeamService;
import com.fst.FinalProjectFSTeams.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private UserService userService;

    @Autowired
    private TeamService teamService;

    @PostMapping("/addEmployee")
    public void addEmployee(@RequestBody User user){
        userService.saveUser(user);
    }

    @PutMapping("/disableEmployee/{id}")
    public void disableEmployee(@PathVariable Integer id){
        userService.disableEmployee(id);
    }

    @PutMapping("/assignTeam/{id}")
    @ResponseBody
    public void assignEmployeesToTeam(@PathVariable Integer id,@RequestParam String employeeIds){
        userService.assignEmployeesToTeam(id,employeeIds);
    }

    @PutMapping("/removeEmployeeFromTeam/{teamId}")
    @ResponseBody
    public void removeEmployeesFromTeam(@PathVariable Integer teamId,@RequestParam String employeeIds){
        userService.removeEmployeesFromTeam(teamId,employeeIds);
    }

    @GetMapping("/viewEmployeesFromTeam/{teamId}")
    public List<User> viewEmployeesFromTeam(@PathVariable Integer teamId){
        return  userService.displayEmployeesFromTeam(teamId);
    }

    @GetMapping("/view")
    public List<User> readEmployees(){
        return  userService.readEmployees();
    }

    @GetMapping("/view/{id}")
    public Optional<User> readEmployeesById(@PathVariable Integer id){
        return  userService.readEmployeesById(id);
    }

    @DeleteMapping("/deleteUsers/")
    public void deleteUsers(@RequestParam String userId){
        userService.deleteUsers(userId);
    }

    @GetMapping("/search/{name}")
    public List<User> searchEmployees(@RequestParam String name){
        return userService.searchEmployee(name);
    }
}
