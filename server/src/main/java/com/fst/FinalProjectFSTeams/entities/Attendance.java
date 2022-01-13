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
@Table(name = "attendance")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "attendanceId")
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId",referencedColumnName = "userId",nullable = false)
    private User user;


    @Column(name="timeStarted", nullable = false)
    private LocalTime timeStarted;

    @Column(name="timeEnded", nullable = false)
    private LocalTime timeEnded;


    @Column(name="elapsedBreak", nullable = true)
    private float elapsedBreak;

    @Column(name="underTime", nullable = true)
    private float underTime;

    @Column(name="overTime", nullable = true)
    private float overTime;

    @Column(name="tardiness", nullable = true)
    private float tardiness;

    @Column(name="totalTime", nullable = true)
    private String totalTime;

    @Column(name="approved", nullable = false)
    private boolean approved = true;

    @Basic(optional = false)
    @Column(name = "insertDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertDate;
}
