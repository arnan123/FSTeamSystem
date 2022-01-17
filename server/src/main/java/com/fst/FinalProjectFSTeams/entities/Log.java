package com.fst.FinalProjectFSTeams.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
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
    @Column(name = "timeStarted")
    private LocalTime timeStarted;

    @Basic(optional = false)
    @Column(name = "timeEnded")
    private LocalTime timeEnded;


    @Column(name="elapsedBreak", nullable = false)
    private float elapsedBreak;

    @Column(name="underTime", nullable = false)
    private float underTime;

    @Column(name="overTime", nullable = false)
    private float overTime;

    @Column(name="tardiness", nullable = false)
    private float tardiness;

    @Basic(optional = false)
    @Column(name = "insertDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertDate;
}
