$("example_text").on("input propertychange", function(){
    var new_text = $("#example_text").val();
    $("#main_info").text(new_text);

    if (new_text < 1) {
        $("#main_info").text("ATTTRIBUTES TELL US MORE ABOUT ELEMENTS");
    }
});

$("select").on("input propertychange", function(){
    var color = $("select").val();
    $("#main_info").css("color", color);
});