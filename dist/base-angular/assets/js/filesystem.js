var fs = require('fs');




// fs.writeFile('c:\mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//START



function saveData(filename, filedata) {

  var home = require("os").homedir();
//var filename = 'test.json';
//var myJSON = JSON.stringify(filename);
var logpath = home + '/Documents/';
//fs.createWriteStream(logpath);
  //var data = "New File Contents";

 fs.writeFile(logpath + filename, filedata, function(err, data) {
   if (err) console.log(err);
   console.log(logpath + filename + "Successfully Written to File.");
 });

}


function readData(filename) {
  var home = require("os").homedir();
//var filename = filename + '.json';
//var myJSON = JSON.stringify(filename);
var logpath = home + "\\Documents\\";
//fs.createWriteStream(logpath);

var data = fs.readFileSync(logpath + filename,'utf8');

    //fs.readFile(logpath + filename, function read(err, data) {
      if (data) {
        console.log("Error getting file from My Docs." + logpath + filename);
      }
      return(data);
}


//STOP

  //  fs.open(logpath + "temp.json", 'w', function (err, file) {
  //    if (err) throw err;
  //    console.log('Opened File!');
  //  });

  // fs.unlink('mynewfile2.txt', function (err) {
  //   if (err) throw err;
  //   console.log('File deleted!');
  // });