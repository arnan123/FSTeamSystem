package com.fst.FinalProjectFSTeams.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

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


    @Column(name="elapsedBreak")
    private float elapsedBreak;

    @Column(name="underTime")
    private float underTime;

    @Column(name="overTime")
    private float overTime;

    @Column(name="tardiness")
    private float tardiness;

    @Column(name="totalTime")
    private String totalTime;

    @Column(name="approved", nullable = false)
    private boolean approved = true;

    @Basic(optional = false)
    @Column(name = "insertDate",columnDefinition = "DATE DEFAULT CURRENT_DATE",nullable = false)
    private LocalDate insertDate;

    //s
}
