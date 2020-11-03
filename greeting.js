$(document).ready(function () {

    $("form").submit(submitRank);

    function submitRank(event) {
        event.preventDefault();


        // find all the checked boxes

        var checkedBoxes = $("input[name=rank]:checked");

        var rank = checkedBoxes.data("rank");

        var colorSelect = checkedBoxes.data("color")

        var firstName = $("input[name=firstName]");

        var fullName = rank + " " + $("#firstName").val() + " " + $("#lastName").val();

        // change text color

        $("#output").css ("color", colorSelect);

        $("button").css("border", "2px blue dashed");

        $("button").css("background-color", "grey");

        $("#salutations").text(fullName);
    }
});