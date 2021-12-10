package com.fst.FinalProjectFSTeams.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="team")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "teamId", length = 3)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "adminId",referencedColumnName = "userId",nullable = false)
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "deptId",referencedColumnName = "deptId",nullable = true)
    private Department department;


    @Column(name = "teamName")
    private String name;

    @Basic(optional = false)
    @Column(name = "insertDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date insertDate;

    @Basic(optional = false)
    @Column(name = "updateDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date updateDate;

    @Column(name="activeInd")
    private boolean activeInd = true;
}
