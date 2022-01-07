package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Department;
import com.fst.FinalProjectFSTeams.entities.Team;

import java.util.List;

public interface DepartmentService {

    public Department saveDepartment(Department department);
    public Department updateDepartment(Department department, Integer deptID);
    public void deleteDepartment(Integer id);
    public List<Department> readDepartments();

    public void assignApproverToDepartment(Integer deptId, Integer approverId);
}
