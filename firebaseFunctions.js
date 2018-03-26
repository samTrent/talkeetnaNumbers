
//set up firebase
var admin = require('firebase-admin');

var serviceAccount = require(__dirname + '/talkeetnanumberdb-firebase-adminsdk-ngvw4-0b3db9b72b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://talkeetnanumberdb.firebaseio.com/'
});


function getAllData(request, responce)
{
  var stuff;

  admin.database().ref("/").on("value", function(snapshot)
  {
    // console.log(snapshot.val());

     data = {data: snapshot.val().users};
     


  }, function (errorObject)
  {
    console.log("The read failed: " + errorObject.code);
  });




  responce.render('results', data);
}


module.exports = {getAllData: getAllData};
