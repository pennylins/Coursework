# 儲存檔案
# file=open("data.txt",mode="w",encoding="utf-8")#開啟
# file.write("你好啊\n我不好") #操作
# file.close() #關閉
#最佳實務操作
# with open("data.txt", mode="w", encoding="utf-8") as file:
#     file.write("57\n234")
#讀取現有的檔案
#把檔案中的數字資料，一行一行的讀取出來，並計算總合
# sum=0
# with open("data.txt", mode="r", encoding="utf-8") as file:
#     for line in file: #一行一行的讀取
#         sum+=int(line)
# print(sum)
# 使用JSHON 格式讀取、複寫檔案，放入變數data裡面
import json
with open("config.json", mode="r", encoding="utf-8")as file:
    data=json.load(file)
print(data) # data是一個字典資料
# print('name:', data["name:"])
# print("version:", data["version:"])
data["name"]="New NAme" #修改變數中的資料
# 把最新的資料複寫回檔案中
with open("config.json", mode="w", encoding="utf-8")as file:
    json.dump(data, file)