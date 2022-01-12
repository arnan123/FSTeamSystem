package com.fst.FinalProjectFSTeams.service;


import com.fst.FinalProjectFSTeams.config.GoogleAuthConfig;
import com.fst.FinalProjectFSTeams.entities.Department;
import com.fst.FinalProjectFSTeams.entities.User;
import com.fst.FinalProjectFSTeams.repository.DepartmentRepository;
import com.fst.FinalProjectFSTeams.repository.UserRepository;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.*;
import org.hibernate.mapping.Array;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class TimesheetStatusServiceImpl implements TimesheetStatusService{

    @Autowired
    private GoogleAuthConfig googleAuthConfig;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private  UserRepository userRepository;

//    @Override
//    public void getSpreadsheetValues() throws IOException, GeneralSecurityException {
//        final String spreadsheetId = "1DulE1oNZ_gt19ZheuX33uOPzPFrThjY48ydL7L_DbZ8";
//        final String range = "ANIS!B6:J6";
//        Sheets sheetsService = googleAuthConfig.getSheetsService();
//        ValueRange response = sheetsService.spreadsheets().values()
//                .get(spreadsheetId, range)
//                .execute();
//        List<List<Object>> values = response.getValues();
//        if (values == null || values.isEmpty()) {
//            System.out.println("No data found.");
//        } else {
//            System.out.println("Date TimeIn TimeOut Lunch Duration");
//            for (List row : values) {
//
//                System.out.printf("%s %s %s %s %s\n", row.get(0),row.get(1),row.get(2),row.get(3), row.get(4));
//            }
//        }
//    }
//    @Override
//    public String create(Integer deptId,String date) throws IOException,GeneralSecurityException {
//        Sheets sheetsService = googleAuthConfig.getSheetsService();
//        Department department = departmentRepository.findById(deptId).get();
//        // [START sheets_create]
//        Spreadsheet spreadsheet = new Spreadsheet()
//                .setProperties(new SpreadsheetProperties()
//                        .setTitle(department.getName()+"-Cutoff "+date));
//        spreadsheet = sheetsService.spreadsheets().create(spreadsheet)
//                .setFields("spreadsheetId")
//                .execute();
//        System.out.println("Spreadsheet ID: " + spreadsheet.getSpreadsheetId());
//        // [END sheets_create]
//        return spreadsheet.getSpreadsheetId();
//    }

    public void generateReport(String date, Integer deptId)
            throws IOException,GeneralSecurityException {

        String range= "A1:D1";
        String secondRange = "A2:A";
        Department department = departmentRepository.findById(deptId).get();
        List<User> users = userRepository.getEmployeesByDepartment(deptId);
        String[] names = new String[users.size()];
        String spreadsheetId;

        Sheets sheetsService = googleAuthConfig.getSheetsService();



        // creating a blank spreadsheet
        Spreadsheet spreadsheet = new Spreadsheet()
                .setProperties(new SpreadsheetProperties()
                        .setTitle(department.getName()+"-Cutoff "+date));
        spreadsheet = sheetsService.spreadsheets().create(spreadsheet)
                .setFields("spreadsheetId")
                .execute();
        System.out.println("Spreadsheet ID: " + spreadsheet.getSpreadsheetId());
        spreadsheetId = spreadsheet.getSpreadsheetId();
        // creating multiple sheets
        for(int i = 0 ; i < users.size();i++){
            names[i] = users.get(i).getFirstName()+" "+users.get(i).getLastName();

            AddSheetRequest addSheetRequest = new AddSheetRequest();
            addSheetRequest.setProperties(new SheetProperties()
                    .setTitle(users.get(i).getLastName()));
            BatchUpdateSpreadsheetRequest batchUpdateSpreadsheetRequest =new BatchUpdateSpreadsheetRequest();
            List<Request> requestList = new ArrayList<Request>();
            batchUpdateSpreadsheetRequest.setRequests(requestList);

            Request request = new Request();
            request.setAddSheet(addSheetRequest);
            requestList.add(request);
            batchUpdateSpreadsheetRequest.setRequests(requestList);
            sheetsService.spreadsheets().batchUpdate(spreadsheetId,batchUpdateSpreadsheetRequest).execute();

            System.out.println("Add");
        }

        // Insert values to spreadsheet

        List<ValueRange> data = new ArrayList<>();
        data.add(new ValueRange()
                .setRange("A1:D1")
                .setValues(Arrays.asList(
                        Arrays.asList("NAME","REMARKS","DATE","COMMENT")
                )));
        data.add(new ValueRange()
                .setRange("A2:A")
                .setValues(Arrays.asList(
                        Arrays.asList(names)
                ))
                .setMajorDimension("COLUMNS"));

        BatchUpdateValuesRequest batchBody = new BatchUpdateValuesRequest()
                .setValueInputOption("USER_ENTERED")
                .setData(data);
        BatchUpdateValuesResponse batchResult = sheetsService.spreadsheets().values()
                .batchUpdate(spreadsheetId,batchBody)
                .execute();
    }
}
