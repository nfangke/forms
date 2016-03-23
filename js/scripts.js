$(document).ready(function(){
  $("form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var location1Input = $("input#location1").val();
    var noun1Input = $("input#noun1").val();
    $(".person1").text(person1Input) ;
    $(".location1").text(location1Input) ;
    $(".noun1").text(noun1Input) ;
    $(".story").show();
    event.preventDefault();
  });
});
