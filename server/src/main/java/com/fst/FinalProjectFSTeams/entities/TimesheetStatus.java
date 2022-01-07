package com.fst.FinalProjectFSTeams.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name="timesheetStatus")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TimesheetStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "timesheetId")
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "deptId",referencedColumnName = "deptId",nullable = false)
    private Department department;

    @Basic(optional = false)
    @Column(name = "startDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date startDate;

    @Basic(optional = false)
    @Column(name = "endDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date endDate;

    @Basic(optional = false)
    @Column(name = "insertDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date insertDate;

    @Basic(optional = false)
    @Column(name = "updateDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date updateDate;

    @Column(name="activeInd")
    private boolean activeInd = true;
}
