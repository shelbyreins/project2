   
    $(document).ready(function() {
        console.log("JSLOADED")
        var userId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
      //Getting references for sing-in
    //   var loginName= $("#login-email");
    //   var loginPassword=$("#login-password");
var alcohol = $(".alcoholBtn");


    $(".alcoholBtn").on("click", function (event) {
        event.preventDefault();
        alcohol = $(this).val();

        getAlcohol({
            alcohol:alcohol,
        });
    });

function getAlcohol(alcohol) {
    $.post("/api/alcohol/", alcohol)
      .then(function(data){
        alcoholId = data.id;
        localStorage.setItem("alcoholid",alcoholId);
      })
      .catch(err=>console.log(err));
      
    
  }
      
      $(document).on("click", "#save-data", handleUserFormSubmit);
     
      
      // Getting the initial list of Users
      
      console.log(name);
      // A function to handle what happens when the form is submitted to register a new User
      function handleUserFormSubmit(event) {
        event.preventDefault();
        console.log('adding alcohol count...')
        // Don't do anything if the name fields hasn't been filled out
        // Calling the upsertUserr function and passing in the value of the name input
        var userid = localStorage.getItem("userid");
        var alcoholid = localStorage.getItem("alcoholid")

        upsertUser({
            alcohol:alcohol,
            count: $(".quantity").val().trim(),
            price: $(".price").val(),
            userId:userid,
            AlcoholId:alcoholid,

        });
        
      }
      

      //A function for creating a user. Calls getUserss upon completion
      function upsertUser(userData) {
        $.post("/api/alcoholuser", userData)
          .then(data=>console.log(data))

          
          .catch(err=>console.log(err))
          // .then(function() {
          //   
          // });
          redirect();
      }

      function redirect(){
        // var divId = document.getElementById("namel");
        //     divId.append(username_db);
        window.location.href = "/calendar";
      }
      $(document).on("click", "#logoutBtn", home);

      function home(){
        window.location.href = "/"
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
    