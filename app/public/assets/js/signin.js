   
    $(document).ready(function() {
        console.log("JSLOADED")
        var userId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
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
            // alert("All required inputs are not entered")
          return;
        }
        // Calling the upsertUserr function and passing in the value of the name input
        upsertUser({
            username: $("#login-email").val().trim(),
            password: $("#login-password").val().trim(),
        });
        
      }
      

      //A function for creating a user. Calls getUserss upon completion
      function upsertUser(userData) {
        console.log($("#login-email").val().trim());
        var login_name = $("#login-email").val().trim();
        var login_password = $("#login-password").val().trim();
        $.post("/api/signin", userData)
        
          .then(function(data){
            var id = data.id;
            var username_db = data.username;
            var password_db = data.password;
          console.log(data);
          if(username_db===login_name&& login_password===password_db){
            // displayLoginName(login_name);
            localStorage.setItem("userid", id);
            redirect();
            
          }else{
            alert("Your username or password is incorrect");
          }
      })
          .catch(err=>console.log(err));
        
      }

      function redirect(){
        // var divId = document.getElementById("namel");
        //     divId.append(username_db);
        window.location.href = "/calendar";
      }
      $(document).on("click", "#logoutBtn", home);

      function home(){
        window.location.href = "/home"
      }
      // function displayLoginName(name){
      //   console.log("User Name to print: ", name);
      //   var divId = document.getElementById("namel");
      //   var newName = $("<h2>");
      //   newName.addClass("name-display");
      //   newName.text(name);
      //   divId.append(newName);
      //   console.log(newName);
      // }
    
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
    