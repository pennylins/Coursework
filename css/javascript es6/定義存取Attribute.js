/*
【屬性 attribute】:用來描述物件的個別差異

# 在建構式中建立屬性:
constructor(參數列表){
    this.屬性名稱=初始資料;
}
*/
//定義一個類別
class Car{
    constructor(){
        this.color="red"; // 建立新屬性 color, 指定資料"red"       
    }
}
// 利用已經定義好的類別，產生新物件
let car1=new Car(); // new Car() 呼叫建構式，產生新物件
let car2=new Car(); // new Car() 呼叫建構式，產生新物件


//定義一個類別
class Car{
    constructor(color){
        // 建立新屬性 color ，資料透過參數，彈性的、在建立物件時提供 
        this.color=color;   
    }
}
// 利用已經定義好的類別，產生新物件
let car1=new Car("blue"); // 新物件擁有 color 屬性，資料為"blue"
let car2=new Car("green"); // 新物件擁有 color 屬性，資料為"green"

/* 【存取物件屬性】
物件.屬性名稱
物件.屬性名稱=新的資料

*/
//定義一個類別
class Car{
    constructor(color){
        // 建立新屬性 color ，資料透過參數，彈性的、在建立物件時提供 
        this.color=color;   
    }
}
// 利用已經定義好的類別，產生新物件
let car1=new Car("blue"); // 新物件擁有 color 屬性，資料為"blue"
console.log(car1.color); // 取得新的屬性資料，印出"blue"
car1.color="red"; // 更新屬性資料
consolor.log(car1.color); // 取得新的屬性資料，印出"red