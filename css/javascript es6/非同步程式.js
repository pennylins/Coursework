//【非同步】:程式中【包含子程式】時產生

//【例1】時間排程 setTimeout
// 時間排程是一個【非同步的程式】
// 主程式設定排成後，交由【背景子程式】負責監控時間
window.setTimeout(function(){ // 此為回呼程式
    // 兩秒後，【背景子程式】喚醒【主程式】，執行此函式
    alert("兩秒後執行");
},2000);
// 主程式設定排程後，立刻往下執行
alert("立刻被呼叫");
// 主程式結束，暫時沒事做



//【ex2】 Ajax 連線
// Ajax 預設是一個【非同步的程式】
let req=new XMLHttpRequest();
req.open("get", "data.txt");
req.onload=function(){
    // 連線完成後，【背景子程式】觸發【主程式】的load 事件處理函式
    alert(this.responseText); // 取得伺服器回應
};
// 主程式送出連線後，交由【背景子程式】負責處理連線細節
req.send();
// 主程式送出連線，立刻往下執行
alert("立刻被呼叫");
// 主程式結束，暫時沒事做



//使用【回呼函式】串接非同步流程
//【ex1】
function getData(callback){
    // 2. 準備做 Ajax 連線
    let req=new XMLHttpRequest();
    req.open("get", "data.txt");
    req.onload=function(){
        // 5. 等待一段時間後，【子程式】完成連線，觸發【主程式】的 load 事件，取得資料
        // 6. 呼叫 callback ，即透過參數傳入的 showData 函式
        callback(this.responseText); 
    };
    req.send(); // 3. 送出連線，建立【子程式】進行非同步處理
    // 4. 【主程式】立刻結束函式，回傳 undefined
}
function showData(result){
    alert(result); // 7. 可以從 result，取得連線後得到的資料
};
getData(showData);// 1. 呼叫取資料用的韓式，並將 showData 函式透過參數傳入