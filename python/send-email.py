# 寄送 Email 的程式
# 準備訊息物件設定
import email.message
msg=email.message.EmailMessage()
msg["From"]="y@gmail"
msg["To"]="y@gmail"
msg["Subject"]="你好啊~PYTHON"
# 寄送純文字的內容
#msg.set_content("我來測試一下喔")
# 寄送比較多樣式的內容 (html)
msg.add_alternative("<h3>20200509 python 測試</h3>今天試著用 python 寄信給自己XDD", subtype="html")
# 連線到 SMTP Server，驗證寄件人身分並發送郵件
import smtplib
# 到網路上搜尋 gmail smtp server 或 yahoo smtp server
server=smtplib.SMTP_SSL("smtp.gmail.com", 465)
server.login("y@gmail", "123456")
server.send_message(msg)
server.close()