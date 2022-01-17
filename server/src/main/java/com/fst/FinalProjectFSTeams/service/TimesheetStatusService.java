package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.DTR;
import com.google.api.services.sheets.v4.model.AppendValuesResponse;
import com.google.api.services.sheets.v4.model.SheetProperties;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

public interface TimesheetStatusService {
    // public void getSpreadsheetValues() throws IOException, GeneralSecurityException;
    //public String create(Integer deptId,String date) throws IOException,GeneralSecurityException;
    public String generateReport(String startDate,String endDate, Integer deptId) throws IOException,GeneralSecurityException;
    public void writeSheet(String spreadsheetId,
                           List<List<Object>> headers, List<DTR> dtr , String headerRange)
            throws IOException,GeneralSecurityException;
}
