$(function () {
    $("#add-btn").click(function () {
        var newBurger = {
            burgerName: $("#burger-to-add").val().trim(),
        }

        console.log(newBurger);
        // Post above data to db
        $.post("/api/burgers", newBurger)
            .then(function (data) {
                console.log(data);
                // Reload the page to resend get request. This will update html.
                location.reload("/");
            });
    });

    $(".devour-btn").click(function () {
        // ID needed to make put request
        var id = $(this).attr("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function () {
            // Reload the page to resend get request. This will update html.
            location.reload();
        });
    });
});