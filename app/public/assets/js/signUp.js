$(document).ready(function () {

  // console.log("JSLOADED")
  //   // Getting references to the name,password and username, 
  var age = $("#age");
  var username = $("#userName");
  var password = $("#password");
  var name = $("#name");
  var gender = $("#gender");
  var weight = $("#weight");
  var displayName;
  $(document).on("click", "#signUp-btn", handleUserFormSubmit);

  // A function to handle what happens when the form is submitted to register a new User
  function handleUserFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!username.val().trim() || !password.val().trim() || !age.val().trim() || !name.val().trim() || !gender.val() || !weight.val()) {
      alert("All required inputs are not entered")

    } else if (age.val() < 21) {
      alert("You must be 21+ to use Buzz Buddy")
      return;
    }
   
    // Calling the upsertUserr function and passing in the value of the name input
    upsertUser({
      name: $("#name").val().trim(),
      username: username.val().trim(),
      age: age.val().trim(),
      password: password.val().trim(),
      gender: $("#gender").val(),
      weight: $("#weight").val().trim(),
      hasAlcohol: false,
    });
  }

  // A function for creating a user. 
  function upsertUser(userData) {
    $.post("/api/signup", userData)
      .then(function (data) {
        displayName = data.name
        localStorage.setItem("currentUser", JSON.stringify(data))
        redirect();
      })
      .catch(err => console.log(err))
  }

  function redirect() {
    alert("Welcome to Buzzbuddy, " + displayName);
    window.location.href = "/calendar";
  }

});
