/*【使用 Promise 物件串接非同步流程】:
new Promise(執行函式(成功程序, 失敗程序));

# 使用 then() 方法接續工作:
then(
    函式(){ 成功時的動作 },
    函式(){ 失敗時的動作 },
)

# 使用 catch() 方法接續失敗處理:
catch(
    函式(){ 失敗時的動作 }
)
*/

//【ex1】
function getData(){
    return new Promise(function(resolve, reject){
        let req=new XMLHttpRequest(); req.open("get", "data.txt");
        req.onload=function(){
            // 如何將連線後得到的資料 this.responseText, 串接到主流程上
            resolve(this.responseText);
        };
        req.send();
    })
}
// 這是主流程
let dataPromise=getData(); // 嘗試從網路取得資料，回傳 Promise 物件
dataPromise.then(function(result){
    console.log(result); // 這裡可以從參數 result，正確取得連線後得到的資料
})

//【ex2】
function getData(){
    return new Promise(function(resolve, reject){
        let req=new XMLHttpRequest(); 
        req.open("get", "data.txt");
        req.onload=function(){
            // 如何將連線後得到的資料 this.responseText, 串接到主流程上
            resolve(this.responseText);
        };
        req.onerror=function(){
            reject("Errot"); // 失敗時，做出失敗報告
        };
        req.send();
    });
}
// 這是主流程，嘗試從網路取得資料，回傳 Promise 物件，並接續工作
getData().then(function(result){console.log(result);}, function(error){
    // 這裡可以從參數 error ，取得失敗報告
    console.log(error);
});
