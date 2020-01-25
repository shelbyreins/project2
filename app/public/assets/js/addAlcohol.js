   
    $(document).ready(function() {
        console.log("JSLOADED")
      
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
      

      //A function for creating creating an entry in the alcoholuser. Joins Alcohol table and user table
      function upsertUser(userData) {
        $.post("/api/alcoholuser", userData)
          .then(data=>console.log(data))
          .catch(err=>console.log(err))
          
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
        localStorage.removeItem("userid");
          localStorage.removeItem("alcoholid");
      }
    });
    