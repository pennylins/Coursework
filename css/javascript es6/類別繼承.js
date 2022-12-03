/*
# 定義子類別:
class 子類別名稱 extends 父類別名稱{}

# 建立子類別物件:
new 子類別名稱()

# 定義子類別建構式:
constructor(){
    super();    //一定要先呼叫父類別建構式
    // 子類別建構式中的其他程式
}
*/

//【例1】
//定義一個類別
class Car{
    constructor(){
        console.log("執行父類別建構式，建立基本的 Car 物件")
    }
}
//定義子類別
class ElectricCar extends Car{
    constructor(){
        super();
        console.log("繼續執行父類別建構式，衍伸的 ElectricCar 物件")
    }
}
//產生子類別物件
let car=new ElectricCar();


//【例2】
//定義一個類別
class Car{
    constructor(color){
        this.color=color; // 定義 color 屬性在父類別中
    }
}
//定義子類別
class ElectricCar extends Car{
    constructor(color){
        super(color);
    }
}
//產生子類別物件
let car=new ElectricCar("green");
console.log("車子顏色: "+car.color); //子類別物件同樣擁有父類別中定義的屬性



//【例3】
//定義一個類別
class Car{
    constructor(color){
        this.color=color; // 定義 color 屬性在父類別中
    }
    run(){  // 定義 run 方法在父類別中
        console.log("Car "+this.color+"is running");
    }
}
//定義子類別
class ElectricCar extends Car{
    constructor(color){
        super(color);
    }
}
//產生子類別物件
let car=new ElectricCar("green");
car.run(); //子類別物件同樣擁有父類別中定義的【方法】



//【例4】加入battery，記錄電量
//定義一個類別
class Car{
    constructor(color){
        this.color=color; // 定義 color 屬性在父類別中
    }
    run(){  // 定義 run 方法在父類別中
        console.log("Car "+this.color+"is running");
    }
}
//定義子類別
class ElectricCar extends Car{
    constructor(color){
        super(color);
        this.battery=100; // 衍伸更多子類別，電動車專屬的定義
    }
}
//產生子類別物件
let car=new ElectricCar("green");
console.log("目前的電量:"+car.battery); //使用子類別中定義的「屬性」



//【例5】加入子類別 run 方法，會取代父類別的 run 方法
//定義一個類別
class Car{
    constructor(color){
        this.color=color; // 定義 color 屬性在父類別中
    }
    run(){  // 定義 run 方法在父類別中
        console.log("Car "+this.color+"is running");
    }
}
//定義子類別
class ElectricCar extends Car{
    constructor(color){
        super(color);
        this.battery=100; // 衍伸更多子類別，電動車專屬的定義
    }
    run(distance){ // 在子類別中定義 run 方法，覆蓋/取代父類別中的【同名方法】
        this.battery-=distance;
        console.log("Car "+this.color+" Runs "+distance+" Km");
    }
}
//產生子類別物件
let car=new ElectricCar("green");
car.run(10); // 使用子類別中定義的【方法】
console.log("目前的電量:"+car.battery); //使用子類別中定義的「屬性」



//【例6】charge 方法
//定義一個類別
class Car{
    constructor(color){
        this.color=color; // 定義 color 屬性在父類別中
    }
    run(){  // 定義 run 方法在父類別中
        console.log("Car "+this.color+"is running");
    }
}
//定義子類別
class ElectricCar extends Car{
    constructor(color){
        super(color);
        this.battery=100; // 衍伸更多子類別，電動車專屬的定義
    }
    run(distance){ // 在子類別中定義 run 方法，覆蓋/取代父類別中的【同名方法】
        this.battery-=distance;
        console.log("Car "+this.color+" Runs "+distance+" Km");
    }
    charge(){ // 在子類別中定義專屬的 charge 方法
        this.battery=100;
    }
}
//產生子類別物件
let car=new ElectricCar("green");
car.run(10); // 使用子類別中定義的【方法】
car.charge(); // 使用子類別中定義的【方法】
console.log("目前的電量:"+car.battery); //使用子類別中定義的「屬性」