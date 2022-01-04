package com.fst.FinalProjectFSTeams.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
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

    @Basic(optional = false)
    @Column(name = "timeStarted",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date timeStarted;

    @Basic(optional = false)
    @Column(name = "timeEnded",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date timeEnded;

    @Column(name="elapsedBreak", nullable = false)
    private byte elapsedBreak;

    @Column(name="underTime", nullable = false)
    private byte underTime;

    @Column(name="overTime", nullable = false)
    private byte overTime;

    @Column(name="tardiness", nullable = false)
    private byte tardiness;

    @Column(name="approved", nullable = false)
    private boolean approved = true;
}
