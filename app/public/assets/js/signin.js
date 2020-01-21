   
    $(document).ready(function() {
        console.log("JSLOADED")

      //Getting references for sing-in
      var loginName= $("#login-email");
      var loginPassword=$("#login-password");
      
      $(document).on("click", "#login-btn", handleUserFormSubmit);
     
      // Getting the initial list of Users
      getUsers();
      var name = $("#login-email").val();
      console.log(name);
      // A function to handle what happens when the form is submitted to register a new User
      function handleUserFormSubmit(event) {
        event.preventDefault();
        console.log('signing in user...')
        // Don't do anything if the name fields hasn't been filled out
        if (!loginName.val().trim()|| !loginPassword.val().trim()) {
            console.log("Input not correct");
            alert("All required inputs are not entered")
          return;
        }
        // Calling the upsertUserr function and passing in the value of the name input
        upsertUser({
            username: $("#login-email").val().trim(),
            
            //password: $("#login-password").val().trim(),
        });
        
      }
      
      // A function for creating a user. Calls getUserss upon completion
      function upsertUser(userData) {
        console.log($("#login-email").val().trim());
        $.get("/api/signin/"+$("#login-email").val().trim())
          .then(data=>console.log(data)).catch(err=>console.log(err));
      }
    
      // Function for retrieving authors and getting them ready to be rendered to the page
      function getUsers() {
        $.get("/api/signin", function(data) {
          var rowsToAdd = [];
          for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createUserRow(data[i]));
          }
          renderUserList(rowsToAdd);
          name.val("");
        });
      }
    
      
    });
    