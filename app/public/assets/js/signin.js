   
    $(document).ready(function() {
        console.log("JSLOADED")
      //Getting references for sing-in


      //Getting references for sign-in

      // var loginName= $("#login-email");
      // var loginPassword=$("#login-password");
      
      $(document).on("click", "#login-btn", handleUserFormSubmit);
     
      // Getting the initial list of Users
      
      
      // A function to handle what happens when the form is submitted to register a new User
      function handleUserFormSubmit(event) {
        event.preventDefault();

        var name = $("#login-email").val().trim();
        var password = $("#login-password").val().trim();

        console.log('signing in user...')
        console.log("Name: " + name);
        console.log("Password: " + password);
        // Don't do anything if the name fields hasn't been filled out
        if (!name || !password) {

            console.log("Input not correct");
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
        console.log("upsertUser() function called");
        $.post("/api/signin", userData, function(data) {

          console.log("Data from POST request: " + data);
          // displayLoginName(login_name);
          localStorage.setItem("currentUser", JSON.stringify(data));
          redirect();

        }).catch(err=>console.log(err));   
      }

      function redirect(){
        // var divId = document.getElementById("namel");
        //     divId.append(username_db);
        window.location.href = "/calendar";
      }
      $(document).on("click", "#logoutBtn", home);

      function home(){
        window.location.href = "/home"
         localStorage.clear();
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
      
    });
    