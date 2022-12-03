/*
# 取得原型物件: 
Object.getPrototypeOf(物件)


 */

 //【例1】
 //定義一個類別
 class Car{
     constructor(color){this.color=color;}
     run(){};
 }
 // 產生類別物件
 let car=new Car("green");
 //取得並再將原型物件顯示出來
 let carProto=Object.getPrototypeOf(car); // car 原型物件
 console.log(carProto);
 let objProto=Object.getPrototypeOf(carProto); // Object 原型物件
 console.log(objProto);
 let lastOne=Object.getPrototypeOf(obkProto); // 原型鍊的終點: null]
 console.log(lastOne);

 /*【繼承關係中的原型鍊】
 */ 

 //【例2】
 // 定義一個類別
 class Car{
     constructor(color){this.color=color;}
     run(){}
 }
 // 定義子類別
 class ElectricCar extends Car{
     constructor(color){super(color); this.battery=100;}
 }
 // 產生子類別物件
 let car=new ElectricCar("green");
 car.run(); //這個如何運作?
 //ans: 回朔至car車子原型 找到run 然後運作

 //【例3】
 // 定義一個類別
 class Car{
    constructor(color){this.color=color;}
    run(){}
}
// 定義子類別
class ElectricCar extends Car{
    constructor(color){super(color); this.battery=100;}
    run(distance){}
    charge(){}
}
// 產生子類別物件
let car=new ElectricCar("green");
car.run(50); //這個如何運作?
// ans: 執行電動車的run方法並運作



//【例4】在物件實體上，【直接】定義屬性方法
 // 定義一個類別
 class Car{
    constructor(color){this.color=color;}
    run(){}
}
// 定義子類別
class ElectricCar extends Car{
    constructor(color){super(color); this.battery=100;}
    run(distance){}
    charge(){}
}
// 產生子類別物件
let car=new ElectricCar("green");
// 在物件實體上直接建立方法或屬性
car.name="姍姍的車";
car.test=function(){
    console.log("建立物件後，在物件實體上新增方法");
    console.log(this.name); // 印出:姍姍的車
};
car.test();

