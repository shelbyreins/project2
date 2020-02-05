$(document).ready(function () {
  // console.log("JSLOADED")

  $(document).on("click", "#login-btn", handleUserFormSubmit);

  // A function to handle what happens when the form is submitted to register a new User
  function handleUserFormSubmit(event) {
    event.preventDefault();

    var name = $("#login-email").val().trim();
    var password = $("#login-password").val().trim();

    // Don't do anything if the name fields hasn't been filled out
    if (!name || !password) {
      alert("All required inputs are not entered");
      return;
    }
    // Calling the upsertUserr function and passing in the value of the name input
    upsertUser({
      "username": name,
      "password": password,
    });

  }

  //A function for logging a user. 
  function upsertUser(userData) {
    $.post("/api/signin", userData, function (data) {
      if (!data) {
        alert("Incorrect Password");
      } else {
        localStorage.setItem("currentUser", JSON.stringify(data));
        redirect();
      }

    }).catch(err => console.log(err));
  }

  function redirect() {
    window.location.href = "/calendar";
  }
  $(document).on("click", "#logoutBtn", home);

  function home() {
    window.location.href = "/home"
    localStorage.clear();
  }


});
