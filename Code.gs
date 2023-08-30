// Function to convert sheet data to JSON format
function json(sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName);
  
  if (sheet === null) {
    return 'Sheet not found';
  }

  const data = sheet.getDataRange().getValues();
  const jsonData = convertToJson(data);
  
  return jsonData;
}

// Function to convert a 2D array to JSON
function convertToJson(data) {
  const headers = data[0];
  const raw_data = data.slice(1);
  let json = [];
  
  raw_data.forEach(d => {
    let object = {};
    for (let i = 0; i < headers.length; i++) {
      object[headers[i]] = d[i];
    }
    json.push(object);
  });
  
  return json;
}

// Function to append a new row to a sheet
function appendRow(sheetName, rowData) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName);
  
  if (sheet !== null) {
    // Read existing data
    const existingData = sheet.getRange(1, 1, sheet.getLastRow(), 1).getValues().flat();
    
    // Check if the value already exists
    if (existingData.includes(rowData[0])) {
      return "Already exists";
    }
    
    // Append the new row
    sheet.appendRow(rowData);
    return "Row added successfully";
  }
  
  return "Sheet not found";
}

// Main function to handle GET requests
function doGet(e) {
  try {
    const path = e.parameter.path;
    const action = e.parameter.action;
    let debugInfo = `doGet called. Path: ${path}, Action: ${action}`;

    if (action === 'read') {
      const jsonData = json(path);
      return ContentService
            .createTextOutput(JSON.stringify({debugInfo, data: jsonData}))
            .setMimeType(ContentService.MimeType.JSON);
    } else if (action === 'write') {
      const rowData = [];
      rowData.push(e.parameter['User-Agent'] || '');
      const result = appendRow(path, rowData);
      return ContentService
            .createTextOutput(`${result}. Debug: ${debugInfo}`)
            .setMimeType(ContentService.MimeType.TEXT);
    } else {
      return ContentService
            .createTextOutput(`Invalid action. Debug: ${debugInfo}`)
            .setMimeType(ContentService.MimeType.TEXT);
    }
  } catch (error) {
    return ContentService
          .createTextOutput(`An error occurred: ${error.toString()}`)
          .setMimeType(ContentService.MimeType.TEXT);
  }
}

