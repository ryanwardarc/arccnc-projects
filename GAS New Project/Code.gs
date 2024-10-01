function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html')
}

var scriptPrp = PropertiesService.getScriptProperties()
//scriptPrp.setProperty('counter', 0)

function myFunc() {
  var counter = scriptPrp.getProperty('counter')
  counter++
  scriptPrp.setProperty('counter', counter)
  
  // Log the name of every folder in the user's Drive.
var folders = DriveApp.getFoldersByName('ARC - CURRENT JOBS');
while (folders.hasNext()) {
  var folder = folders.next();
  var current = folder.getId();
  Logger.log(current);
  
  
  var folderName = 'ARC-' + counter + '-'
  var newFolder = DriveApp.getFolderById(current).createFolder(folderName);
}

var Customer = ['TJ Joinery','Betec Joinery']

console.log(Customer)
}