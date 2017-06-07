
  $(document).ready(function() {
    $(".click").click(function() {
      var best = $("#best").val();
      var mutual = $("#mutual").val();
      var coleague = $("#coleague").val();
      var employer = $("#employer").val();

      var greetings = [best, mutual, coleague, employer];

      greetings.forEach(function(greeting) {
        alert("Good Morning " + greeting);
      })

    });
  });
