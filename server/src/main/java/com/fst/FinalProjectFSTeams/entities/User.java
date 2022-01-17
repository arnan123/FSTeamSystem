package com.fst.FinalProjectFSTeams.entities;

import com.fst.FinalProjectFSTeams.enums.Role;
import com.fst.FinalProjectFSTeams.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

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

    @Column(name="lastName", length = 64)
    private String lastName;

    @Column(name = "role",nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name="email", nullable = false, length = 64)
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "teamId",referencedColumnName = "teamId")
    private Team team;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "deptId",referencedColumnName = "deptId")
    private Department department;

    @Basic(optional = false)
    @Column(name = "insertDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertDate;

    @Basic(optional = false)
    @Column(name = "updateDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updateDate;

    @Column(name = "status",nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;

    //ss
}
