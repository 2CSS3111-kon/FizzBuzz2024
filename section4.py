fee = int(input('金額を設定>>'))
change = int(input('お金を投入してください>>'))

change = change - fee

count1 = 0
count2 = 0
count3 = 0
count4 = 0

if change < 0:
    print('金額が不足しています')  

else:
    count1 = change // 500
    change %= 500

    count2 = change // 100
    change %= 100

    count3 = change // 50
    change %= 50

    count4 = change // 10
    change %= 10

print('お釣りは500円玉が'+ str(count1)+'枚、100円玉が'+ str(count2)+'枚、50円玉が'+ str(count3)+'枚、10円玉が'+ str(count4)+'枚です')
