while(True):
    inputValue = int(input("Please enter a positive number (0 or greater): "))
    if(inputValue >= 0):
        break
    else:
        print("Sorry that is an invalid input")

outputString = []
maxValue = 4

if(inputValue == 0):
    exit
else:
    outputString.append(inputValue)
    while(inputValue != 4):
        if(inputValue > maxValue):
            maxValue = inputValue
        if(inputValue % 2 == 0):
            # even
            inputValue = inputValue / 2
        elif(inputValue % 2 == 1):
            # odd
            inputValue = inputValue * 3 + 1
        outputString.append(int(inputValue))
    print("The sequence is ", outputString)
    print("The length of the sequence is ", len(outputString))
    print("The maximum value of the sequence is ", int(maxValue))
