package com.fst.FinalProjectFSTeams.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="team")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "teamId")
    private int id;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "adminId",referencedColumnName = "userId")
    private User user;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "deptId",referencedColumnName = "deptId")
    private Department department;

    @Column(name = "teamName")
    private String name;

    @Basic(optional = false)
    @Column(name = "insertDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertDate;

    @Basic(optional = false)
    @Column(name = "updateDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updateDate;

    @Column(name="activeInd")
    private boolean activeInd = true;
}
