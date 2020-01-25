  //  import sha256 from 'crypto-js/sha256';

    $(document).ready(function() {
        console.log("JSLOADED")
    //   // Getting references to the name,password and username, 
      var age = $("#age");
      var username=$("#userName");
      var password=$("#password");
      var displayName = $("#userName").val().trim();
      $(document).on("click", "#signUp-btn", handleUserFormSubmit);
     
      // Getting the initial list of Users
      getUsers();
    //Function to encrypt password
var pswdtoencryt=$("#password").val().trim();
hashedPassword = CryptoJS.SHA256(pswdtoencryt);
console.log("Hashed Password",hashedPassword);

      // A function to handle what happens when the form is submitted to register a new User
      function handleUserFormSubmit(event) {
        event.preventDefault();
        console.log('registering user...')
        // Don't do anything if the name fields hasn't been filled out
        if (!username.val().trim()|| !password.val().trim()||!age.val().trim()) {
            alert("All required inputs are not entered")
          return;
        }
        // else if(age.val() >= 21){
        //   alert("You must be 21 to use the site")
        // }
        // Calling the upsertUserr function and passing in the value of the name input
        upsertUser({
            name: $("#name").val().trim(),
            username: username.val().trim(),
            age: age.val().trim(),
            password:hashedPassword,
            //password: password.val().trim(),
            gender: $("#gender").val().trim(),
            weight: $("#weight").val().trim(),
            hasAlcohol: false,
        });
      }
    
      // A function for creating a user. 
      function upsertUser(userData) {
        $.post("/api/signup", userData)
        .then(function(data){
          var id = data.id;
        console.log(data);
        localStorage.setItem("userid", id);
       
        })
          .catch(err=>console.log(err))
        
          redirect();
      }
    
      function redirect(){
        alert("Welcome to Buzzbuddy,"+ displayName);
        window.location.href = "/calendar";
      }

    });
    