/* 1.【方法】: 用來描述物件可以做的事= 與物件綁定的函式

# 在類別中建立方法:
方法的名稱(參數列表){
    內部的程式碼
}
*/

//定義一個類別
class Car{
    constructor(color){ // 定義建構式
        this.color=color;
    }
    // 定義一個 run 方法，透過物件呼叫，並執行內部程式碼
    run(){
        consolor.log("Running");
    }
}
// 產生新物件，物件擁有 color 屬性，與 run 方法
let car1=new Car("blue");



//2.【呼叫物件方法】: 物件.方法名稱(參數資料) 

//定義一個類別
class Car{
    constructor(color){this.color=color;} // 定義建構式
    // 定義一個 run 方法，透過物件呼叫，並執行內部程式碼
    run(){
        consolor.log("Running");
    }
}
// 產生新物件，物件擁有 color 屬性，與 run 方法
let car1=new Car("blue");
car1.run(); // 呼叫 run 方法，執行 run 內部的程式，印出"Running"


//3. 在物件方法中使用 【this】 代表【綁定物件】

//定義一個類別
class Car{
    constructor(color){this.color=color;} // 定義建構式
    // 定義一個 run 方法，透過物件呼叫，並執行內部程式碼
    run(){
        consolor.log("Car "+this.color+"Running");
    }
}
// 產生新物件，物件擁有 color 屬性，與 run 方法
let car1=new Car("blue");
car1.run(); // 印出"Car Blue Running"


//4. 物件屬性、方法的綜合操作

class Car{ //定義一個類別
    constructor(color){
        this.color=color;
        this.speed=0; // 車子的初始速度固定為 0
    }
    run(speed){
        this.speed=speed;
        consolor.log("Car "+this.color+"Running at "+this.speed+"KM/HR");
    }
    stop(){
        this.speed=0; // 更新車子的速度
        console.log("Car "+this.color+" Stopped");
    }
}
// 產生新物件，物件擁有 color 屬性，speed 屬性，與 run, stop 方法
let car1=new Car("blue");
car1.run(50); // 印出"Car Blue Running at 50 KM/HR"
car1.stop(); // 印出"Car Blue Stopped"