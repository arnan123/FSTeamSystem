package com.fst.FinalProjectFSTeams.entities;

import com.fst.FinalProjectFSTeams.enums.HolidayType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "holiday")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Holiday {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "holidayId")
    private int id;

    @Column(name = "holidayName", length = 255, nullable = false)
    private String name;

    @Basic(optional = false)
    @Column(name = "holidayDate",columnDefinition = "DATE DEFAULT CURRENT_DATE", nullable= false)
    private Date holidayDate;

    @Column(name = "holidayType",nullable = false)
    @Enumerated(EnumType.STRING)
    private HolidayType holidayType;

    @Basic(optional = false)
    @Column(name = "insertDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertDate;

}
