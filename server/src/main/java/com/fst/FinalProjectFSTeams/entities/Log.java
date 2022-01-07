package com.fst.FinalProjectFSTeams.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name = "log")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Log {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "logId")
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "attendanceId",referencedColumnName = "attendanceId",nullable = false)
    private Attendance attendance;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId",referencedColumnName = "userId",nullable = false)
    private User user;

    @Basic(optional = false)
    @Column(name = "timeStarted",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date timeStarted;

    @Basic(optional = false)
    @Column(name = "timeEnded",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date timeEnded;

    @Column(name="elapsedBreak", nullable = false)
    private int elapsedBreak;

    @Column(name="underTime", nullable = false)
    private int underTime;

    @Column(name="overTime", nullable = false)
    private int overTime;

    @Column(name="tardiness", nullable = false)
    private int tardiness;

    @Basic(optional = false)
    @Column(name = "insertDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date insertDate;
}
