# 隨機模組
import random
# 隨機選取
# data=random.choice([3,4,5,6,7])
# print(data)
# data=random.sample([3,4,5,6,7],3)
# print(data)
# 隨機調換順序 (就是洗牌的概念)
# data=[3,4,5,6,7]
# random.shuffle(data)
# print(data)
# 隨機取得亂數
# data=random.random()
# print(data)
# data=random.uniform(60,100) #0.0~1.0之間的隨機亂數
# print(data)
# 取得常態分配亂數
# 平均數100 標準差10 得到的資料多數再90~110之間
# data=random.normalvariate(100,10)
# print(data)
# 統計模組
import statistics as stat
data=stat.stdev([1,2,3,4,5,8,10])
print(data)