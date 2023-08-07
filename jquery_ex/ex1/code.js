$(function () {
    //この中にjqueryの処理を書く
    //要素の取得
    let text = $("#text-1");
    //要素の内容の取得 Hello
    console.log(text.html());
    //HelloをGoodByeに変更
    text.html("GoodBye")

    //リンク
    //リンク要素を取得
    let link =  $("#link-1");
    //リンクのURLを取得
    console.log(link.attr("href"));
    //リンクの書き換え
    link.attr("href","https://kinarino.jp/cat8/38722");
    link.attr("target","_blank");

    //css
    let texts = $(".text-class");
    //色をつける(.eq(index番号)→class内一部変更)
    texts.eq(0).css("color","green");
    texts.eq(2).css("color","green");
});