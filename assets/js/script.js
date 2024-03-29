// check off specific todo by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// click on X to delete to do
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});


// add new to do
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var newToDo = $(this).val(); // grab new to do text from input (getter)
    $(this).val(""); // setter - clear input
    // create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newToDo + "</li>");
  }
});
