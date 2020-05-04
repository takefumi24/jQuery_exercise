var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange', 'clementine', 'mandarine', 'tangerine', 'papaya', 'passionfruit', 'peach', 'pear', 'persimmon', 'physalis', 'plum/prune', 'pineapple', 'pomegranate', 'raspberry', 'rambutan', 'star fruit', 'strawberry'];

$(function () {

  let list = $("#list");
  function appendList(world) {
    let item = $('<li class="list">').append(world);
    list.append(item);
  }
  $("#submit").on("click", function () {
    let input = $("#keyword").val();
    let reg = new RegExp("^" + input);
    $(".list").remove();

    $.each(fruits, function (i, fruit) {
      if (fruit.match(reg)) {
        appendList(fruit);
      };
    });

    if ($(".list").length === 0) {
      appendList("一致する果物がありませんでした");
    }
  });
});
