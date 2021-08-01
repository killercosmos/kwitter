
 var firebaseConfig = {
      apiKey: "AIzaSyCDduqbpwBUmJSae6zQ87WlIj8hOrdHI_s",
      authDomain: "kwitter-e07c7.firebaseapp.com",
      databaseURL: "https://kwitter-e07c7-default-rtdb.firebaseio.com",
      projectId: "kwitter-e07c7",
      storageBucket: "kwitter-e07c7.appspot.com",
      messagingSenderId: "54274357550",
      appId: "1:54274357550:web:8b43aa200cfbcd12d2a2bf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addroom()
    {
          var room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      var row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #" + Room_names +"</div><hr>";
      document.getElementById("output"),innerHTML = row;
      
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}