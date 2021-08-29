Creating a Google Sheets script
====================================

1. Create a new google spreadsheet and name it as you want
2. Select the menu item **Tools > Script** editor.
3. Delete any code in your script editor, and paste the code below:

.. code-block:: javascript

  function doPost(e) {
    dataDrive = JSON.parse(e.postData.contents);
    save_data(dataDrive);
  }
   
  // Method to save given data to a sheet
  function save_data(e){
    Logger.log("--- save_data ---"); 
    try {
      var dateTime = new Date();
      // ss must be the URL of the Google Sheets starting from https thru /edit 
      var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/$SPREADSHEET_ID/edit");
      var dataLoggerSheet = ss.getSheetByName("$PAGE_NAME"); //spreadsheet page name(it's not the file name)
   
      // Get last edited row from DataLogger sheet
      var row = dataLoggerSheet.getLastRow() + 1;
   
      // Start Populating the data
      dataLoggerSheet.getRange(row, 1).setValue(row -1); // ID in column A
      dataLoggerSheet.getRange(row, 2).setValue(dateTime); // dateTime in column B
      
      //itarate over the object writting it's parameters in the spreadsheet
      var column = 3;
      var object = e.parameters;
      for (var i in object){
        dataLoggerSheet.getRange(row, column).setValue(object[i]);
        column ++;
      }
        
    }
   
    catch(error) {
      Logger.log(JSON.stringify(error));
    }
   
    Logger.log("--- save_data end---"); 
  }

4. Replace in the code the spreadsheet ID ``$SPREADSHEET_ID`` and spreadsheet page name ``$PAGE_NAME``, as the exemple

.. code-block:: javascript

 var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/14C9TgdYTxNokt1g_KyBBtMaq0gtRmuUHhoTJYjPiICM/edit");
 var dataLoggerSheet = ss.getSheetByName("Sheet1");
  
Google sheets default page name for english is ``Sheet1``, so if you have not changed it, ``$PAGE_NAME`` is probably ``Sheet1``.

5. Save the project
6. Click on **Deploy > New Deployment**
7. Select **type > Web app**
8. Type a description for your deployment, in the option  **Who has access** select **anyone** and click on **Deploy**
9. Copy the **deployment id**
