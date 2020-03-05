var firebaseConfig = {
    apiKey: "AIzaSyB1wv4L4LJDqi4acka78D9uPy0w4Kio4j8",
    authDomain: "quickfix-bad6f.firebaseapp.com",
    databaseURL: "https://quickfix-bad6f.firebaseio.com",
    projectId: "quickfix-bad6f",
    storageBucket: "quickfix-bad6f.appspot.com",
    messagingSenderId: "835465656653",
    appId: "1:835465656653:web:5ff7be815c1a99684c9f04"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //firebase.analytics(); 

  var database=firebase.database();
  var ref=database.ref('Ahmedabad/AElectrician/AE5');
  ref.on('value',gotData);
   function gotData(data) {
  // console.log(data.val());
  	// document.write(JSON.stringify(data.val(),null,4));}
  	// document.write(print(data.val()));}
document.getElementById('name').innerHTML=print(data.val());}


var ref2=database.ref('Ahmedabad/AElectrician/AE5');
ref2.on('value',gotData2);
console.log(ref2);

function gotData2(data) {
// console.log(data.val());
  // document.write(JSON.stringify(data.val(),null,4));}
  // document.write(print(data.val()));}
document.getElementById('name').innerHTML=print2(data.val());}
  var print2 = function(o){
  var str='';
  for(var p in o){
      if(typeof o[p] == 'string'){
          str+=  p + ': ' + o[p]+' </br>';
      }else{
          str+= '<br>Feed Back: '+p + ': </br>' + print(o[p]) ;
      }
  }
  return str;
}
var print = function(o){
  var str='';
  for(var p in o){
      if(typeof o[p] == 'string'){
          str+=  p + ': ' + o[p]+' </br>';
      }else{
          str+= '<br>Flights: '+p + ': </br>' + print(o[p]) ;
      }
  }
  return str;
}
