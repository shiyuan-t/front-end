//ol liの情報を取得
let list = document.getElementById("list");

//新しい要素の作成
let newLink = document.createElement("a");
//内容を挿入
newLink.innerHTML = "developer.mozilla.org";
list.append(newLink);

//新しい<li>を作成
let item = document.createElement("li");
list.append(item);
item.append(newLink);

//要素の削除
let removeLink = document.getElementById("link-2");
//removeLink.remove();
removeLink.parentNode.remove();

//buttonをクリック
//document.getElementById("button1").onclick=()=>{}
let btnEvent = document.getElementById("button1");
btnEvent.onclick = function(){
    console.log("ボタンをクリックした1");
}
btnEvent.onclick = function(){
    console.log("ボタンをクリックした2");
}
/**対象の要素.addEventListener(種類, () => {
  // 処理を記述
}); */
// 対象の要素.addEventListener(種類, function() {
//    // 処理を記述
//  }, false);

btnEvent.addEventListener("click",()=>{
    console.log("ボタンをクリックした3");
});
btnEvent.addEventListener("click",()=>{
    console.log("ボタンをクリックした4");
});

//helloメソッドの作成
function hello(){
    console.log("hello");
}