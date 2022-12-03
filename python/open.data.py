# 網路連線
# import urllib.request as request
# src= "https://www.ntu.edu.tw/"
# with request.urlopen(src) as response:
#     data=response.read().decode("utf-8") #取得台灣大學網站的原始碼
# print(data)

# 串接、擷取公開資料
import urllib.request as request
import json
src="https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613"
with request.urlopen(src) as response:
    data=json.load(response) #利用 json模組處裡json 資料格式
#將公司名稱列表出來
clist=data["result"]["results"]
with open("data.txt", "w", encoding="utf-8") as file: 
    for company in clist:
        file.write(company["A_Diet"]+"\n")