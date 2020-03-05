// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAk29sJ9JdzxNbm4B3CFxqF1OAK4HOavjM",
    authDomain: "professional-database.firebaseapp.com",
    databaseURL: "https://professional-database.firebaseio.com",
    projectId: "professional-database",
    storageBucket: "professional-database.appspot.com",
    messagingSenderId: "445512848021",
    appId: "1:445512848021:web:504d4487549e0bf974019c",
    measurementId: "G-2NFR73LTV6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messagesRef= firebase.database().ref('messages');
  var database= firebase.database();
// Listen for form submit
document.getElementById('professionalForm').addEventListener('submit',submitForm);


//Submit form
function submitForm(e){
    e.preventDefault();

    // Get Values
    var name= getInputVal('name');
    var storename= getInputVal('storename');
    var phonenumber= getInputVal('phonenumber');
    var email= getInputVal('email');
    var address= getInputVal('address');
    //Save message
    saveMessage(name,storename,phonenumber,email,address);
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
//Save message to firebase

function saveMessage(name,storename,phonenumber,email,address){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
        name: name,
        storename: storename,
        phonenumber: phonenumber,
        email:email,
        address: address
        
    });
}

var ref= database.ref('messages');
ref.on('value',gotData,errData);

function gotData(data){
    console.log(data.val());
    var scores= data.val();
    var keys=Object.keys(scores);
    console.log(keys);
    for(var i=0; i< keys.length;i++){
        var k= keys[i];
        var name= scores[k].name;
        var storename= scores[k].storename;
        var phonenumber= scores[k].phonenumber;
        var email= scores[k].email;
        var address= scores[k].address;
        console.log(name,storename);
        var qqd= createElement('qqd','Name: '+ name +' ' + storename +' '+ phonenumber +' '+email +' '+address+ ' ');
        qqd.parent('scorelist');
    }
}
function errData(err){
    console.log('Error');
    console.log(err);
}
