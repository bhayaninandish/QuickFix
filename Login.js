var firebaseConfig = {
    apiKey: "AIzaSyDqOZd8e6Swg0Rqjy9Zpb-uAMalvuPdvtk",
    authDomain: "signup-58e7b.firebaseapp.com",
    databaseURL: "https://signup-58e7b.firebaseio.com",
    projectId: "signup-58e7b",
    storageBucket: "signup-58e7b.appspot.com",
    messagingSenderId: "188754125014",
    appId: "1:188754125014:web:814a144c59276062062977",
    measurementId: "G-C54R9X81HE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Reference messages collection

  var messagesRef= firebase.database().ref('messages');

  function validateEmail(){
    var email= document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
      return true;
    }
    else{
      alert("Email address is invalid")
      return false;
    }
  
  }
  