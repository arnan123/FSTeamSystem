package com.fst.FinalProjectFSTeams.entities;

import com.fst.FinalProjectFSTeams.enums.Role;
import com.fst.FinalProjectFSTeams.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name = "user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private int id;

    @Column(name="firstName", nullable = false, length = 64)
    private String firstName;

    @Column(name="lastName", nullable = true, length = 64)
    private String lastName;

    @Column(name = "role",nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name="email", nullable = false, length = 64)
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "teamID",referencedColumnName = "teamID",nullable = false)
    private Team team;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "deptId",referencedColumnName = "deptId",nullable = false)
    private Department department;

    @Basic(optional = false)
    @Column(name = "insertDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date insertDate;

    @Basic(optional = false)
    @Column(name = "updateDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date updateDate;

    @Column(name = "status",nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;


}
