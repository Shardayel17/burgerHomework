$(function () {
    $(".btn-EatBurger").on("click", function (event) {
        var id = $(this).data("Burger_ID");


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: id

        }).then(

            function () {
                location.reload();

            }
        );

    });


    $("#BurgerNew").on("click", function (event) {
        event.preventDefault();


        var NewBurger = {
            BurgerName: $("#BurgerNew").val().trim()
        };


        $.ajax("/api/burgers/", {
            type: "POST",
            data: NewBurger



        }).then(
            function () {
                location.reload();
            }

        );
    });
});