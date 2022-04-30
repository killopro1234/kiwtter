var firebaseConfig = {
    apiKey: "AIzaSyCPOLqcbRX0ixgb0XrspPFEV-8Jmy6MEDQ",
    authDomain: "kwiter-8a358.firebaseapp.com",
    projectId: "kwiter-8a358",
    storageBucket: "kwiter-8a358.appspot.com",
    messagingSenderId: "794735664711",
    appId: "1:794735664711:web:248d9c96a0c05404f41b62"
  };
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData(){
  firebase.database().ref("/" + room_name).on("value",function(snapshot){
    document.getelementById("output").innerHTML="";snapshot.forEach(function(childSnapshot){
      childKey=childSnapshot.key;childData=childSnapshot.val(); if(childKey!="purpose"){
        firebase_message_id =childKey;
        message_data=childData;
        console.log(firebase_message_id);
        console.log(menssage_data);ç
        names=message_data["name"]
        message=message_data["message"]
      }
    })
  })
}
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);       