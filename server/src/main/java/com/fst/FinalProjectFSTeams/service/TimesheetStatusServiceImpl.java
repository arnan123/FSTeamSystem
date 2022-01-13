package com.fst.FinalProjectFSTeams.service;


import com.fst.FinalProjectFSTeams.config.GoogleAuthConfig;
import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.entities.Department;
import com.fst.FinalProjectFSTeams.entities.User;
import com.fst.FinalProjectFSTeams.repository.AttendanceRepository;
import com.fst.FinalProjectFSTeams.repository.DepartmentRepository;
import com.fst.FinalProjectFSTeams.repository.UserRepository;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class TimesheetStatusServiceImpl implements TimesheetStatusService{

    @Autowired
    private GoogleAuthConfig googleAuthConfig;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private  UserRepository userRepository;

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Override
    public void generateReport(String date, Integer deptId)
            throws IOException,GeneralSecurityException {

        String range= "A1:D1";
        String secondRange = "A2:A";
        String headerRange="A6:E6";
        String contentRange="A7:D7";
        Department department = departmentRepository.findById(deptId).get();
        List<User> users = userRepository.getEmployeesByDepartment(deptId);
        List<String> attendances = attendanceRepository.getAllAttendancePerDept(deptId);
        List<String> items = new ArrayList<>();
        SheetProperties sheetProperties = new SheetProperties();
        String[] names = new String[users.size()];
        String spreadsheetId;
        Sheets sheetsService = googleAuthConfig.getSheetsService();
        System.out.println("HELLO");

        String arr[] = new String[256];


        for(int i = 0 ; i < attendances.size(); i++){
            arr = attendances.get(i).split(",");

        }

        List<List<Object>> headers = Arrays.asList(
                Arrays.asList("DATE","TIME IN","TIME OUT","LUNCH","DURATION")
        );


        System.out.printf("LIST\n");
        DateTimeFormatter formatter =  DateTimeFormatter.ofPattern("yyyy-MM-dd");
        int x = 0;
        for(int i = 0 ; i < attendances.size();i++){
            System.out.println(attendances.get(i));
        }

        List<List<Object>> content = Arrays.asList(
                Arrays.asList(attendances)
        );


//        // creating a blank spreadsheet
//        Spreadsheet spreadsheet = new Spreadsheet()
//                .setProperties(new SpreadsheetProperties()
//                        .setTitle(department.getName()+"-Cutoff "+date));
//        spreadsheet = sheetsService.spreadsheets().create(spreadsheet)
//                .setFields("spreadsheetId")
//                .execute();
//        System.out.println("Spreadsheet ID: " + spreadsheet.getSpreadsheetId());
//        spreadsheetId = spreadsheet.getSpreadsheetId();
//
//        // creating multiple sheets
//        for(int i = 0 ; i < users.size();i++){
//            names[i] = users.get(i).getFirstName()+" "+users.get(i).getLastName();
//
//            sheetProperties.setTitle(users.get(i).getLastName());
//
//            AddSheetRequest addSheetRequest = new AddSheetRequest();
//            addSheetRequest.setProperties(sheetProperties);
//            BatchUpdateSpreadsheetRequest batchUpdateSpreadsheetRequest =new BatchUpdateSpreadsheetRequest();
//            List<Request> requestList = new ArrayList<Request>();
//            batchUpdateSpreadsheetRequest.setRequests(requestList);
//
//            Request request = new Request();
//            request.setAddSheet(addSheetRequest);
//            requestList.add(request);
//            batchUpdateSpreadsheetRequest.setRequests(requestList);
//           sheetsService.spreadsheets().batchUpdate(spreadsheetId,batchUpdateSpreadsheetRequest).execute();
//
//            writeSheet(spreadsheetId,sheetProperties,headers,content,headerRange,contentRange);
//            System.out.println("Add");
//
//
//        }
//        // Insert values to spreadsheet (sheet1)
//        List<ValueRange> data = new ArrayList<>();
//        data.add(new ValueRange()
//                .setRange("A1:D1")
//                .setValues(Arrays.asList(
//                        Arrays.asList("NAME","REMARKS","DATE","COMMENT")
//                )));
//        data.add(new ValueRange()
//                .setRange("A2:A")
//                .setValues(Arrays.asList(
//                        Arrays.asList(names)
//                ))
//                .setMajorDimension("COLUMNS"));
//
//        BatchUpdateValuesRequest batchBody = new BatchUpdateValuesRequest()
//                .setValueInputOption("USER_ENTERED")
//                .setData(data);
//        BatchUpdateValuesResponse batchResult = sheetsService.spreadsheets().values()
//                .batchUpdate(spreadsheetId,batchBody)
//                .execute();
    }
    @Override
    public void writeSheet(String spreadsheetId, SheetProperties sheetProperties, List<List<Object>> headers,List<List<Object>> content,String headerRange,String contentRange)
            throws IOException,GeneralSecurityException {
        Sheets sheetsService = googleAuthConfig.getSheetsService();
        List<ValueRange> valueRangeList = new ArrayList<>();

        ValueRange valueRange = new ValueRange();
        valueRange.setRange(sheetProperties.getTitle() + "!" + headerRange);
        System.out.println(valueRange.getRange());
        valueRange.setValues(headers);
        valueRangeList.add(valueRange);

        ValueRange  valueRange1 = new ValueRange();
        valueRange1.setRange(sheetProperties.getTitle() + "!" + contentRange);
        System.out.println(valueRange1.getRange());
        valueRange1.setValues(content);
        valueRangeList.add(valueRange1);

        BatchUpdateValuesRequest requestBody = new BatchUpdateValuesRequest();
        requestBody.setValueInputOption("RAW");
        requestBody.setData(valueRangeList);
        sheetsService.spreadsheets().values().batchUpdate(spreadsheetId,requestBody).execute();
    }

}
