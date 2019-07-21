firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;

    if(user != null){
      //window.location = "home.html";
      var email_id = user.email;
      console.log(email_id);
      document.getElementById("email").innerHTML = email_id;
    }

  } else {

  }
});
