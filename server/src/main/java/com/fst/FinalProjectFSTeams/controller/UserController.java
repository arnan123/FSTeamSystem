package com.fst.FinalProjectFSTeams.controller;

import com.fst.FinalProjectFSTeams.entities.Team;
import com.fst.FinalProjectFSTeams.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.fst.FinalProjectFSTeams.entities.User;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/useremail/{email}")
    public User getUser(@PathVariable String email){
        return userService.getUserFromEmail(email);
    }



}
