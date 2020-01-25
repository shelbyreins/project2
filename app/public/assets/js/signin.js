   
    $(document).ready(function() {
        console.log("JSLOADED")
<<<<<<< HEAD
=======

        var userId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
>>>>>>> 9744e5a45bb38bb5dfbb8e17cfd4c7fac32754dc
      //Getting references for sing-in


      //Getting references for sign-in

      var loginName= $("#login-email");
      var loginPassword=$("#login-password");
      
      $(document).on("click", "#login-btn", handleUserFormSubmit);
     
      // Getting the initial list of Users
      
      var name = $("#login-email").val();
     
      // A function to handle what happens when the form is submitted to register a new User
      function handleUserFormSubmit(event) {
        event.preventDefault();
        console.log('signing in user...')
        console.log(name);
        // Don't do anything if the name fields hasn't been filled out
        if (!loginName.val().trim()|| !loginPassword.val().trim()) {

            console.log("Input not correct");
            // alert("All required inputs are not entered")

             console.log("Input not correct");

          return;
        }
        // Calling the upsertUserr function and passing in the value of the name input
        upsertUser({
            username: $("#login-email").val().trim(),
            password: $("#login-password").val().trim(),
        });
        
      }
      

      //A function for logging a user. 
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

          var username_db = data.username;//this part is not working.
          var password_db = data.password;//this part is not working.
        
        if(login_name === username_db && login_password===password_db){
          redirect();
        }else{
          alert("Your username or password is incorrect");
        }

        
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
    