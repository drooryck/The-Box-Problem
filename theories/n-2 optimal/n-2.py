def chance(n,b):
    c = 0
    for i in range(1, n+1, 1):
        for j in range(0, n-b, 1):
            c = c + (1/n)*((b/n)**(i-1))*((n-j)/n)**(n-i)
            
    return c

for n in range(4,10000,1):
    biggestValue = 0
    for b in range(n-4,n,1):
        if chance(n,b) > biggestValue:
            biggestValue = chance(n,b)
    if chance(n,n-2) != biggestValue:
        print("logical fallacy")

print("finito")    
