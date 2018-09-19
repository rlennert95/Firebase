  var config = {
    apiKey: "AIzaSyBK0thHYBT1vB2TB8-zA94rWghJ8eFj4pg",
    authDomain: "fir-hw-9c2c6.firebaseapp.com",
    databaseURL: "https://fir-hw-9c2c6.firebaseio.com",
    projectId: "fir-hw-9c2c6",
    storageBucket: "fir-hw-9c2c6.appspot.com",
    messagingSenderId: "53760244253"
  };

  firebase.initializeApp(config);

  var database = firebase.database();


$(document).ready(function () {
  console.log("test");
  $("#run-search").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var trainDest = $("#destination").val().trim();
    var firstTrain =$("#train-time").val().trim();
    var trainFreq = $("#frequency").val().trim();

    var trainInfo = {
      name: trainName,
      destination: trainDest,
      first_train: firstTrain,
      frequency: trainFreq
    };

   database.ref().push(trainInfo);

   console.log(trainInfo.name);

 

  $("#train-name").val("");
  $("#destination").val("");
  $("#train-time").val("");
  $("#frequency").val("");


  });

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().first_train;
    var trainFreq = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(trainDest);
    console.log(firstTrain);
    console.log(trainFreq);

    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDest),
      $("<td>").text(trainFreq),
      $("<td>").text(firstTrain),
     
    );

    $("#train-table > tbody").append(newRow);

  })

});