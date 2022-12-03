# 載入pandas 模組
import pandas as pd
# 建立 Series
data=pd.Series([20, 15, 10])
# 基本 Series操作
# print("Max", data.max())
# print("Median", data.median())
# data=data*2
# print(data)
# 做比較可以用下面
# data=data==20
# print(data)

# 建立 DataFrame
data=pd.DataFrame({
    "name":["Amy", "John", "Bob"],
    "salary":[30000,40000,50000]
})
# 基本 DataFrame 操作 
# print(data)
#取得特定的欄位
# print("name")
# print(data["name"])
# 取得特定的列 第一列是 0 開始計算, 用[]才對
print(data)
print("===================")
print(data.iloc[1]) #印出第2列