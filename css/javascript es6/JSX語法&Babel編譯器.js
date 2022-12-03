/*【JSX語法】
# JSX: 在 JS 中類似 HTML 標籤的語法
# JSX 用途:方便產生 React Element/ 取代React.createElement()
# 原生的寫法: React.createElement()
# 比起 HTML, JSX【更接近】Javascript
# JSX語法中，設定【屬性】時會用【className】而不是class


# 【瀏覽器不支援 JSX 語法】
# Babel: 將 JSX 轉換成瀏覽器相容的程式
*/

// 設計組件類別
class MyHead extends React.Component{
    render(){
        // 建立以【原生 HTML 標籤】為基礎的 React Element
        return React.createElement("h1", null, "Heool Everyone");
    }
} 
window.addEventListener("load",()=>{
     // 建立以【React 組件】為基礎的 React Element
     let myElement=React.createElement(Myhead);
     ReactDOM.render(
         myElement, document.body
     );
});

// 下面是用 JSX 寫的方式
class MyHead extends React.Component{
    render(){
        // 取代 React.createElement("h1", null, "Heool Everyone");
        return <h1>Hello Woeld</h1>;
    }
} 
window.addEventListener("load",()=>{
     let myElement=<MyHead/>   // 取代 React.createElement(Myhead);
     ReactDOM.render(
         myElement, document.body
     );
});

//【ex1】
// 取代 React.createElement(Myhead, {level:3})
let myComponent=<Myhead level="3"/>



//# 在 JSX 使用 {JS程式} 結合動態資料

//【ex2】
class MyHead extends React.Component{
    render(){
        /* 取代 React.createElement("div", {className:"head"},
            "Hello WOrld"+this.props.level)
        */
    return <div className="head">Hello WOrld {this.props.level}</div>;
    }
} 
window.addEventListener("load",()=>{
    // 1. 建立自訂的 React 組件實體
     let myComponent=<MyHead level="3"/>;   
     //2. 將建立好的 React 組件實體畫到容器中
     ReactDOM.render(
         myComponent, document.body
     );
});


//# 建立巢狀結構
//【ex3】 
// 省略Myhead 組件的定義...
class MyHead extends React.Component{
    render(){ //類似 HTML 般使用巢狀的結構
        return <div>   
            <MyHead level="1"/>
            <MyHead level="2"/>
            <MyHead level="3"/>
        </div>;
    }
} 
window.addEventListener("load",()=>{
    // 1. 建立自訂的 React 組件實體，並提供組件的屬性物件
     let myComponent=<MyHeadlist/>;   
     //2. 將建立好的 React 組件實體畫到容器中
     ReactDOM.render(list, document.body);
});