import math as m
# 10,001st prime number
bigNum = 10001
running = True
primeCounter = 0
c = 0
while running:
	c += 1
	if c % 2 == 0 or c % 3 == 0 or c % 5 == 0:
		print("Prime No")
	else:
		primeCounter+=1
		print("Prime Yes")
		if primeCounter == bigNum:
			print(primeCounter)