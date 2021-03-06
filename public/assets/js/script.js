$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevour");
  
      var newDevourState = {
        devoured: newDevoured,
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState,
        headers: {
            "Content-Type": "application/json"
        },
      }).then(
        function() {
          console.log("changed devour to", newDevourState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0,
      };
    
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  