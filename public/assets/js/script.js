$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    //   var id = $(this).data("id");
    //   var newSleep = $(this).data("newsleep");
  
      var newDevour= {
        devour: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour
      }).then(
        function() {
          console.log("changed burger to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});