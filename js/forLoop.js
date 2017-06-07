$(document).ready(function() {
  $(".click").click(function() {
    var number1 = parseInt($("#number1").val()); // larger number...
    var number2 = parseInt($("#number2").val()); // multiple number/ the number to be multiplied by...

    for (var currentNumber = 0; currentNumber <= number1; currentNumber += number2) {
      alert(currentNumber);

    }
  })
})
