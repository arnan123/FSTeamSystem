package com.fst.FinalProjectFSTeams.entities;

import com.fst.FinalProjectFSTeams.enums.Type;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="department")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "deptId")
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "approverId",referencedColumnName = "userId")
    private User user;

    @Column(name="departmentName", nullable = false, length = 64)
    private String name;

    @Column(name = "type",nullable = false)
    @Enumerated(EnumType.STRING)
    private Type type;

    @Basic(optional = false)
    @Column(name = "insertDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date insertDate;

    @Basic(optional = false)
    @Column(name = "updateDate",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date updateDate;

    @Column(name="activeInd")
    private boolean activeInd = true;

}
