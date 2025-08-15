package software.bytepushers.prospect.resource.server;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import software.bytepushers.prospect.resource.server.model.Prospect;

import java.io.*;
import java.util.*;

public class ProspectManager {

    public static ProspectData readProspectsFromExcel(File file) throws IOException {
        List<Prospect> prospects = new ArrayList<>();
        List<String> headers = new ArrayList<>();
        int emailColumnIndex = -1;

        try (FileInputStream fis = new FileInputStream(file);
             Workbook workbook = new XSSFWorkbook(fis)) {

            Sheet sheet = workbook.getSheetAt(0);
            Iterator<Row> rowIterator = sheet.iterator();

            if (rowIterator.hasNext()) {
                // Read header row
                Row headerRow = rowIterator.next();
                for (Cell cell : headerRow) {
                    String headerValue = getCellValueAsString(cell);
                    headers.add(headerValue);

                    // Find email column (case insensitive)
                    if (headerValue.toLowerCase().contains("email")) {
                        emailColumnIndex = cell.getColumnIndex();
                    }
                }

                // If no email column found, assume first column is email
                if (emailColumnIndex == -1) {
                    emailColumnIndex = 0;
                }

                // Read data rows
                while (rowIterator.hasNext()) {
                    Row row = rowIterator.next();

                    // Skip empty rows
                    if (isRowEmpty(row)) continue;

                    // Get email from the identified email column
                    Cell emailCell = row.getCell(emailColumnIndex);
                    if (emailCell == null) continue;

                    String email = getCellValueAsString(emailCell);
                    if (email == null || email.trim().isEmpty()) continue;

                    Prospect prospect = new Prospect(email);

                    // Read all other fields
                    for (int i = 0; i < headers.size(); i++) {
                        if (i >= row.getLastCellNum()) break;

                        Cell cell = row.getCell(i);
                        String headerName = headers.get(i);
                        Object cellValue = getCellValue(cell);

                        prospect.setField(headerName, cellValue);
                    }

                    prospects.add(prospect);
                }
            }
        }

        return new ProspectData(prospects, headers, emailColumnIndex);
    }

    public static void writeProspectsToExcel(ProspectData prospectData, File file) throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Prospects");

        List<String> headers = prospectData.getHeaders();
        List<Prospect> prospects = prospectData.getProspects();

        // Write header row
        Row headerRow = sheet.createRow(0);
        for (int i = 0; i < headers.size(); i++) {
            headerRow.createCell(i).setCellValue(headers.get(i));
        }

        // Write data rows
        int rowNum = 1;
        for (Prospect prospect : prospects) {
            Row row = sheet.createRow(rowNum++);

            for (int i = 0; i < headers.size(); i++) {
                String headerName = headers.get(i);
                Object value = prospect.getField(headerName);

                Cell cell = row.createCell(i);
                setCellValue(cell, value);
            }
        }

        // Auto-size columns
        for (int i = 0; i < headers.size(); i++) {
            sheet.autoSizeColumn(i);
        }

        try (FileOutputStream fos = new FileOutputStream(file)) {
            workbook.write(fos);
        }
        workbook.close();
    }

    private static boolean isRowEmpty(Row row) {
        if (row == null) return true;

        for (int i = row.getFirstCellNum(); i < row.getLastCellNum(); i++) {
            Cell cell = row.getCell(i);
            if (cell != null && !getCellValueAsString(cell).trim().isEmpty()) {
                return false;
            }
        }
        return true;
    }

    private static Object getCellValue(Cell cell) {
        if (cell == null) return "";

        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue();
            case NUMERIC:
                if (DateUtil.isCellDateFormatted(cell)) {
                    return cell.getDateCellValue();
                } else {
                    double numValue = cell.getNumericCellValue();
                    // Check if it's a whole number
                    if (numValue == Math.floor(numValue)) {
                        return (long) numValue;
                    } else {
                        return numValue;
                    }
                }
            case BOOLEAN:
                return cell.getBooleanCellValue();
            case FORMULA:
                try {
                    return cell.getNumericCellValue();
                } catch (Exception e) {
                    return cell.getStringCellValue();
                }
            default:
                return "";
        }
    }

    private static String getCellValueAsString(Cell cell) {
        Object value = getCellValue(cell);
        return value == null ? "" : value.toString();
    }

    private static void setCellValue(Cell cell, Object value) {
        if (value == null) {
            cell.setCellValue("");
        } else if (value instanceof String) {
            cell.setCellValue((String) value);
        } else if (value instanceof Number) {
            cell.setCellValue(((Number) value).doubleValue());
        } else if (value instanceof Boolean) {
            cell.setCellValue((Boolean) value);
        } else if (value instanceof Date) {
            cell.setCellValue((Date) value);
        } else {
            cell.setCellValue(value.toString());
        }
    }

    // Inner class to hold prospect data along with metadata
    public static class ProspectData {
        private List<Prospect> prospects;
        private List<String> headers;
        private int emailColumnIndex;

        public ProspectData(List<Prospect> prospects, List<String> headers, int emailColumnIndex) {
            this.prospects = prospects;
            this.headers = headers;
            this.emailColumnIndex = emailColumnIndex;
        }

        public List<Prospect> getProspects() { return prospects; }
        public List<String> getHeaders() { return headers; }
        public int getEmailColumnIndex() { return emailColumnIndex; }
    }
}