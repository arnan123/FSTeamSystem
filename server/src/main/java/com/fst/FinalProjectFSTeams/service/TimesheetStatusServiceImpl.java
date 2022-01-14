package com.fst.FinalProjectFSTeams.service;


import com.fst.FinalProjectFSTeams.config.GoogleAuthConfig;
import com.fst.FinalProjectFSTeams.entities.DTR;
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
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;

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
    public void generateReport(String startDate,String endDate, Integer deptId)
            throws IOException,GeneralSecurityException {

        String range= "A1:D1";
        String secondRange = "A2:A";
        String headerRange="A6:E6";
        String contentRange="A7:D7";
        Department department = departmentRepository.findById(deptId).get();
        List<User> users = userRepository.getEmployeesByDepartment(deptId);
        List<String> attendances = attendanceRepository.getAllAttendancePerDept(deptId,startDate,endDate);
        SheetProperties sheetProperties = new SheetProperties();
        String[] names = new String[users.size()];
        String spreadsheetId;
        Sheets sheetsService = googleAuthConfig.getSheetsService();
        List<DTR> list = new ArrayList<>();
        List<Integer> sheetIds = new ArrayList<Integer>();

        String[] arr = new String[1000];


        List<List<Object>> headers = Arrays.asList(
                Arrays.asList("DATE","TIME IN","TIME OUT","LUNCH","DURATION")
        );

        DateTimeFormatter formatter2 =  DateTimeFormatter.ofPattern("MMM dd");
        LocalDate start = LocalDate.parse(startDate);
        LocalDate end = LocalDate.parse(endDate);
        String startDay = formatter2.format(start);
        String endDay = formatter2.format(end);
//        System.out.println(startDay);
//        System.out.println(endDay);
        // creating a blank spreadsheet
        Spreadsheet spreadsheet = new Spreadsheet()
                .setProperties(new SpreadsheetProperties()
                        .setTitle(department.getName()+"-Cutoff "+startDay+"-"+endDay));
        spreadsheet = sheetsService.spreadsheets().create(spreadsheet)
                .setFields("spreadsheetId")
                .execute();
        System.out.println("Spreadsheet ID: " + spreadsheet.getSpreadsheetId());
        spreadsheetId = spreadsheet.getSpreadsheetId();

        // creating multiple sheets
        for(int i = 0 ; i < users.size();i++){
            names[i] = users.get(i).getFirstName()+" "+users.get(i).getLastName();

            sheetProperties.setTitle(users.get(i).getLastName());
            sheetIds.add(sheetProperties.getSheetId());



            AddSheetRequest addSheetRequest = new AddSheetRequest();
            addSheetRequest.setProperties(sheetProperties);
            BatchUpdateSpreadsheetRequest batchUpdateSpreadsheetRequest =new BatchUpdateSpreadsheetRequest();

//            // for merging cells TIMESHEET
//            GridRange gridRange = new GridRange();
//            gridRange.setSheetId(sheetIds.get(i));
//            gridRange.setStartRowIndex(3);
//            gridRange.setEndRowIndex(3);
//            gridRange.setStartColumnIndex(1);
//            gridRange.setEndColumnIndex(5);
//            MergeCellsRequest mergeCellsRequest = new MergeCellsRequest();
//            mergeCellsRequest.setMergeType("MERGE_COLUMNS");
//            mergeCellsRequest.setRange(gridRange);


            List<Request> requestList = new ArrayList<Request>();
            batchUpdateSpreadsheetRequest.setRequests(requestList);



            Request request = new Request();
            request.setAddSheet(addSheetRequest);
            //request.setMergeCells(mergeCellsRequest);
            requestList.add(request);
            batchUpdateSpreadsheetRequest.setRequests(requestList);
            sheetsService.spreadsheets().batchUpdate(spreadsheetId,batchUpdateSpreadsheetRequest).execute();
        }

        // Insert values to spreadsheet (sheet1)
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
//        for(int i = 0 ; i < attendances.size(); i++){
//            System.out.println(attendances.get(i));
//        }


        for(int i = 0 ; i < attendances.size();i++){
            arr  = attendances.get(i).split(",");
            DTR dtr = new DTR();
//            System.out.println(attendances.get(i));
            dtr.setName(arr[0]);
            dtr.setDate(arr[1].substring(0,10));
            dtr.setTimeIn(arr[2]);
            dtr.setTimeOut(arr[3]);
            Float num = Float.parseFloat(arr[4]);
            num /= 60;
            String s = String.valueOf(num);
            dtr.setLunchBreak(s);
            dtr.setDuration(arr[5]);
            list.add(dtr);

        }
        // writing per sheet
        writeSheet(spreadsheetId,headers,list,headerRange);
    }
    @Override
    public void writeSheet(String spreadsheetId, List<List<Object>> headers,List<DTR> content,
                           String headerRange)
            throws IOException,GeneralSecurityException {
        Sheets sheetsService = googleAuthConfig.getSheetsService();
        List<ValueRange> valueRangeList = new ArrayList<>();
        for(int i = 0, j =7,k = 0 ; i < content.size(); i++){



        ValueRange valueRange = new ValueRange();
        valueRange.setRange(content.get(i).getName() + "!" + headerRange);
        //System.out.println(valueRange.getRange());
        valueRange.setValues(headers);
        valueRangeList.add(valueRange);

        ValueRange  valueRange1 = new ValueRange();
            valueRange1.setRange(content.get(i).getName() + "!" + "A"+j+":E"+j+"");
            j++;
            k++;
            // 15 entries of daily time in
            if( k == 15){
                j = 7;
                k = 0;
            }
//            System.out.println(valueRange.getRange());
            valueRange1.setValues(Arrays.asList(
                    Arrays.asList(content.get(i).getDate(),content.get(i).getTimeIn(),
                            content.get(i).getTimeOut(),content.get(i).getLunchBreak(),content.get(i).getDuration())
            ));
            valueRangeList.add(valueRange1);
            BatchUpdateValuesRequest requestBody = new BatchUpdateValuesRequest();
            requestBody.setValueInputOption("RAW");
            requestBody.setData(valueRangeList);
            sheetsService.spreadsheets().values().batchUpdate(spreadsheetId,requestBody).execute();
        }



        BatchUpdateValuesRequest requestBody = new BatchUpdateValuesRequest();
        requestBody.setValueInputOption("RAW");
        requestBody.setData(valueRangeList);
        sheetsService.spreadsheets().values().batchUpdate(spreadsheetId,requestBody).execute();
    }

}
