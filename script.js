$("#example_text").on("input propertychange",function(){
    var new_text = $("#example_text").val();
    $("#main_info").text(new_text);
    
   /* var length = new_text.length;
    $("#example_text").css("width", length + 150); */
    
    if(new_text < 1){
       $("#main_info").text("ATTRIBUTES TELL US MORE ABOUT ELEMENTS");
    }
  });
  
  $("select").on("input propertychange",function(){
    var color = $("select").val();
    $("#main_info").css("color", color);
  });
