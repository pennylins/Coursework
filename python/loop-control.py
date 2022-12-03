# #break的簡易範例
# #n=0
# #while n<5:
# #    if n==3:
#         break
#     print(n)
# # else的簡單範例
# sum=0
# for n in range(11):
#     sum+=n
# else:
#     print(sum) #印出1加到10的結果              
#綜合範例:找出整數平方根
#輸入9,得到3；輸入11，得到沒有整數的平方根
# n=input("輸入一個正整數:")
# n=int(n)
# for i in range(n):
#     if i*i==n:
#         print("整數平方根", i)
#         break
# else:
#     print("沒有整數平方根")