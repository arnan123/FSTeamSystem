package com.fst.FinalProjectFSTeams.service;

import com.google.api.services.sheets.v4.model.AppendValuesResponse;
import com.google.api.services.sheets.v4.model.SheetProperties;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

public interface TimesheetStatusService {
    // public void getSpreadsheetValues() throws IOException, GeneralSecurityException;
    //public String create(Integer deptId,String date) throws IOException,GeneralSecurityException;
    public void generateReport(String date, Integer deptId) throws IOException,GeneralSecurityException;
    public void writeSheet(String spreadsheetId, SheetProperties sheetProperties,
                           List<List<Object>> headers,List<List<Object>> content ,String headerRange,String contentRange)
            throws IOException,GeneralSecurityException;
}
