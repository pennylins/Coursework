/*1.建構式： "建立新物件時"被呼叫的函式
如果沒有特別寫，會內建【空白建構式】:constructor(){}
constructor(參數列表){
    建構式的內部程式
}
*/

//定義一個類別
class Car{
    constructor(){
        console.log("建構式被呼叫");        
    }
}
// 利用已經定義好的類別，產生新物件
let car1=new Car(); // new Car() 呼叫建構式，產生新物件
let car2=new Car(); // new Car() 呼叫建構式，產生新物件