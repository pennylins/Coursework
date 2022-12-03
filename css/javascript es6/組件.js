/* 【組件的生命週期】

# 建立組件: 依照順序執行以下方法
1. constructor();
2. componentWillMount();
3. render();
4. componentDidMount();

# 更新組件: 
1. componentWillUpdate();
2. render();
3. componentDidUpdate();

# 刪除組件:
1. componentWillUnmount();

在組件類別中【複寫方法】，自訂邏輯
ex. 複寫render();
*/