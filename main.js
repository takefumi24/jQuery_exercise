var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange', 'clementine', 'mandarine', 'tangerine', 'papaya', 'passionfruit', 'peach', 'pear', 'persimmon', 'physalis', 'plum/prune', 'pineapple', 'pomegranate', 'raspberry', 'rambutan', 'star fruit', 'strawberry'];

$(function () {
  $("#submit").on("click", function () {
    let input = $("#keyword").val();
    $.each(fruits, function (i, fruit) {
      if (input === fruit) {
        $("#result").text(input);
        return false;
      } else {
        $("#result").text("一致する果物はありませんでした。");
      }
    });
  });
});
