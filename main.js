var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange', 'clementine', 'mandarine', 'tangerine', 'papaya', 'passionfruit', 'peach', 'pear', 'persimmon', 'physalis', 'plum/prune', 'pineapple', 'pomegranate', 'raspberry', 'rambutan', 'star fruit', 'strawberry'];

$(function () {
  // id名がlistを取得して、変数に格納
  let list = $("#list");
  // append()を使って、変数listに値を出力するappendList(world)関数を定義
  function appendList(world) {
    let item = $('<li class="list">').append(world);
    list.append(item);
  };
  // 要素の頭に ^ をつける関数editElementを作成
  function editElement(element) {
    let result = "^" + element;
    return result
  }
  // 検索ボタンがクリックされた際にイベント発火
  $("#submit").on("click", function () {
    // 入力された値をval()で取得
    let input = $("#keyword").val();
    // スペースで文字列を区切った配列を作成
    let inputs = input.split(" ")
    // 配列の要素を加工した新しい配列を作成する
    let newInputs = inputs.map(editElement);
    // 正規表現オブジェクトを生成し、変数に格納
    // 複数の言葉が要素の配列newInputsの要素を | でつなぐことで複数検索ができるようにする
    let reg = RegExp(newInputs.join("|"));
    // 2回目以降の検索時に前の検索結果を反映させないように削除
    $(".list").remove();
    // 配列の要素を一つずつ取り出して比較する
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
