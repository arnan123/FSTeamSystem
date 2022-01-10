package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Department;

import java.util.List;
import java.util.Optional;

public interface DepartmentService {

    public Department saveDepartment(Department department);
    public Department updateDepartment(Department department, Integer deptID);
    public void deleteDepartment(Integer id);
    public List<Department> readDepartments();
    public Optional<Department> readDepartment(Integer departmentID);

    public void assignApproverToDepartment(Integer deptId, Integer approverId);
}
