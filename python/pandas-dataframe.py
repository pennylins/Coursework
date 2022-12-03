# 載入 pandas 模組
import pandas as pd
# 篩選練習1 - Series
# data=pd.Series([30, 15, 20])
# condition=data>18
# print(condition)
# filteredData=data[condition]
# print(filteredData)

# ex2
# data=pd.Series(["您好", "Python","Pandas"])
# condition=data.str.contains("P")
# print(condition)
# filteredData=data[condition]
# print(filteredData)

# 篩選練習3 - DataFrame 
data=pd.DataFrame({
    "name":["Amy","Bob","Chris"],
    "salary":[3500,2000,1000]
})
# ↓ 這是比較實際的操作(橫向-列的操作)
# condition=data["salary"]>=2000

# 以下是直向-欄的操作
condition=data["name"]=="Amy"
print(condition)
filteredData=data[condition]
print(filteredData)