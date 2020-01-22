   
    $(document).ready(function() {
        console.log("JSLOADED")
    //   // Getting references to the name,password and username, 
      var name = $("#name");
      var username=$("#userName");
      var password=$("#password");
      
      $(document).on("click", "#signUp-btn", handleUserFormSubmit);
     
      // Getting the initial list of Users
      getUsers();
    
      // A function to handle what happens when the form is submitted to register a new User
      function handleUserFormSubmit(event) {
        event.preventDefault();
        console.log('registering user...')
        // Don't do anything if the name fields hasn't been filled out
        if (!name.val().trim().trim()|| !username.val().trim()|| !password.val().trim()) {
            console.log("Input not correct");
            alert("All required inputs are not entered")
          return;
        }
        // Calling the upsertUserr function and passing in the value of the name input
        upsertUser({
            name: name.val().trim(),
            username: username.val().trim(),
            age: $("#age").val().trim(),
            password: password.val().trim(),
            gender: $("#gender").val().trim(),
            weight: $("#weight").val().trim(),
        });
      }
    
      // A function for creating a user. Calls getUserss upon completion
      function upsertUser(userData) {
        $.post("/api/signup", userData)
          .then(data=>console.log(data)).catch(err=>console.log(err))
          .then(function() {
            window.location.href = "/calendar";
          });
      }
    
      function getUsers() {
        $.get("/api/users", function(data) {
          var rowsToAdd = [];
          for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createUserRow(data[i]));
          }
          renderUserList(rowsToAdd);
          name.val("");
        })
       
      }
    
      
    });
    