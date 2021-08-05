var firebaseConfig = {
      apiKey: "AIzaSyCDduqbpwBUmJSae6zQ87WlIj8hOrdHI_s",
      authDomain: "kwitter-e07c7.firebaseapp.com",
      databaseURL: "https://kwitter-e07c7-default-rtdb.firebaseio.com",
      projectId: "kwitter-e07c7",
      storageBucket: "kwitter-e07c7.appspot.com",
      messagingSenderId: "54274357550",
      appId: "1:54274357550:web:8b43aa200cfbcd12d2a2bf"
    };
    firebase.initializeApp(firebaseConfig);

    var usr_name = localStorage.getItem("user_name");
    var room_name = localStorage.getItem("room_name");
    function send()
{
      var msg = document.getElementById("messege").value;

      firebase.database().ref(room_name).push({
      name:usr_name,
      message:msg,
      like:0
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}