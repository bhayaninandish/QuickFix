// Your web app's Firebase configuration
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


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);


//Submit form
function submitForm(e){
    e.preventDefault();

    // Get Values
    var name= getInputVal('name');
    var email= getInputVal('email');
    var password= getInputVal('password');
    var confPassword= getInputVal('confPassword');
    //Save message
    saveMessage(name,email,password,confPassword);
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase

function saveMessage(name,email,password,confPassword){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
        name: name,
        email:email,
        password:password,
        confPassword:confPassword
    });
}

function Validate() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confPassword").value;
  if (password != confirmPassword) {
      alert("Passwords do not match.");
      return false;
  }
  return true;
}

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
function validateName(){
  var name= document.getElementById("name").value;
  var nameFormat=/^[a-zA-Z\s-, ]+$/;
  if(name.match(nameFormat)){

    return true;
    
  }
  else{
    alert("Name should not contain anything other than alphabets");
    return false;
  }
  
}
