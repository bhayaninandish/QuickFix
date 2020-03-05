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
  var data_str='';
  var database=firebase.database();
  var ref=database.ref('Baroda/Plumber');
  ref.on('value',gotData);
   function gotData(data) {
        myrow=data.val();
      // console.table(myrow)
        

      Object.entries(myrow).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        //use key and value here
        console.log(key)
        //data_str += key;

        Object.entries(entry).forEach(entry1 => {
            let key = entry1[0];
            let value = entry1[1];
            //use key and value here
            console.log(value)
             
            data_str += '\n'+value.name+'\n'+value.address+'\n'+value.timing;
          });


      });
    
  // console.log(data.val());
  	// document.write(JSON.stringify(data.val(),null,4));}
  	// document.write(print(data.val()));}
document.innerHTML=data_str;
alert(data_str)

}

var ref2=database.ref('Baroda/Plumber');
ref2.on('value',gotData2);

function gotData2(data) {
// console.log(data.val());
  // document.write(JSON.stringify(data.val(),null,4));}
  // document.write(print(data.val()));}
document.getElementById('name').innerHTML=print2(data.val());}
  var print2 = function(o){
  var str='';
  //for(var p in o){
     /* if(typeof o[p] == 'string'){
          str+=  p + ': ' + o[p]+' </br>';
      }else{
          str+= '<br>Feed Back: '+p + ': </br>' + print(o[p]) ;
      }*/
      
      str+= '<br>' + ': ' + data_str+' </br>';
  //}
  return str;
}
/*
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
}*/
