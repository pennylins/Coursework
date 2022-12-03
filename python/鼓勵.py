import urllib.request as req
url="https://www.cmoney.tw/finance/f00043.aspx?s=3443&o=3"
request=req.Request(url, headers={
    "cookie":"page_view=4",
    "user-AGENT":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36"
})
with req.urlopen(request) as response:
    data=response.read().decode("utf-8")
import bs4
root=bs4.BeautifulSoup(data, "html.parser")
titles=root.find_all("td")
for title in titles:
    con=title.text
    print(con)
    with open("d1.txt", mode="a", encoding="utf-8") as file:
        file.write(con+"\n")
