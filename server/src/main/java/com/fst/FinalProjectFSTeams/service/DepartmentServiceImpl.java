package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Department;
import com.fst.FinalProjectFSTeams.entities.Team;
import com.fst.FinalProjectFSTeams.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService {
    @Autowired
    private DepartmentRepository departmentRepository;
    @Override
    public Department saveDepartment(Department department){
        return departmentRepository.save(department);
    }

    @Override
    public Department updateDepartment(Department department, Integer deptID){
        Department oldDept = departmentRepository.findById(deptID).orElse(department);
        oldDept.setName(department.getName());
        oldDept.setType(department.getType());
        oldDept.setUpdateDate(department.getUpdateDate());
        oldDept.setActiveInd(department.isActiveInd()); // not sure if isActiveInd()
        departmentRepository.save(oldDept);
        return oldDept;
    }

    @Override
    public void deleteDepartment(Integer id){
        departmentRepository.deleteById(id);
    }


    @Override
    public List<Department> readDepartments(){
        return departmentRepository.findAll();
    }
}
