//メソッドその1
function printHello(){
    console.log("Hello");
}
//メソッドの呼び出し
printHello();

//メソッドその2 return
function sum(a,b){
    return a+b;
}
//メソッドの呼び出し
console.log(sum(1,2));

//デフォルトパラメータ
function print(str1,str2="世界",str3="!!!"){
    console.log(str1+""+str2+""+str3);
}
//呼び出し
print("Hello");
print("Hello","平和");
print("Hello","平和","平等");

//ラムダ式
let add = (x,y) => x+y;
console.log(add(2,3));