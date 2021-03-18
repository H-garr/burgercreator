// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    console.log("JS")
    $(".updateburger").on("click", function(event) {
      var id = $(this).data("id");
      var devouredBurger = {
          devoured: true
      }
    console.log(devouredBurger);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBurger
      }).then(
        function() {
          console.log("changed burger to", devouredBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $("#addBurger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burgerInput").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        console.log("NEw", newBurger)
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function (response) {
                console.log("created new burger", response);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".deleteburger").on("click", function(event) {
      var id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
