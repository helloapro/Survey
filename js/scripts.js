$(function(){
  $("#blanks form").submit(function(event){
    var nameInput = $("input#name").val();
    var color = $("input:radio[name=color]:checked").val();
    var music = $("#music").val();

    $(".name").text(nameInput);
    $(".color").text(color);
    $(".music").text(music);

    $("#survey").show();

    event.preventDefault();

  });
});
