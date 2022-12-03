/*【定義、呼叫靜態方法(static method)】

# 靜態方法: 與類別綁定的方法

# 定義靜態方法(在類別中):
static 方法的名稱(參數列表){
    內部的程式碼
}

# 呼叫靜態方法: 
類別名稱.方法名稱(參數資料)
*/

//【例1】
class Car{
    constructor(color){this.color=color;}
    run(){console.log("CAR "+this.color+" Running");}
    static showColors(){  //定義一個靜態方法
        console.log("We support three colors: blue, red, green.");
    }
}
// 直接使用類別名稱，呼叫靜態方法
Car.showColors();
Car.run(); // 錯誤的程式， run非靜態方法，必須由物件實體呼叫
// 產生新物件實體
let carObj=new Car("blue");
carObj.run(); // 使用物件實體，呼叫物件的方法 run();
carObj.showColors(); //錯誤的程式，showColors 為靜態方法，必須由類別名稱呼叫
