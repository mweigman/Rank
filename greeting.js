$(document).ready(function () {

    $("form").submit(submitRank);

    function submitRank(event) {
        event.preventDefault();


        // find all the checked boxes

        var checkedBoxes = $("input[name=rank]:checked");

        var colorSelect = checkedBoxes.data("color")

        var firstName = $("input[name=firstName]");

        var fullName = $("#firstName").val() + " " + $("#lastName").val();

        // change text color

        $("#output").css ("color", colorSelect);

        $("button").css("border", "2px blue dashed")

        $("#salutations").text(fullName);
    }
});