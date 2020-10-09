$(function () {
    //show the specific popup after click the its button
    $("button.show").on("click", function (e) {
        e.preventDefault();
        $("." + $(this).data("pop")).fadeIn(400);
    });


    //hide the shown popup after clicking at any part in the body of the popup div
    $(".popup").on("click", function () {
        $(this).fadeOut(400);
    });

    //hide the shown popup after clicking at the cross sign
    $(".close").on("click", function () {
        $(this).parentsUntil(".popup").parent().fadeOut(400);
    });

    //hide the shown popup after clicking the esc key
    $(document).on("keydown", function (e) {
        if (e.keyCode === 27) {
            e.preventDefault();
            $(".popup").fadeOut(400);
        }
    });

    //Stop Propagation for the alert div to prevent it from hiding the all container popup if you clicked at its body
    $(".popup .alert").on("click", function (e) {
        e.stopPropagation();
    });

});