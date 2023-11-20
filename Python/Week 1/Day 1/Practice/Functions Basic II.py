def countdown(num):
    arr=[]
    for i in range(0,num+1):
        arr.append(num-i)
    return arr

arr1=countdown(5)

def print_and_return(arr):
    print(arr[0])
    return arr[1]

def first_plus_length(arr):
    return arr[0]+len(arr)

# print(first_plus_length([1,2,3,4,5]))

def values_greater_than_second(arr):
    newarr=[]
    if len(arr)<2:
        return False
    else:
        for el in arr:
            if el>arr[1]:
                newarr.append(el)
        print(len(newarr))
        return newarr


def length_and_value(size, value):
    newarr=[]
    for i in range(0,size):
        newarr.append(value)
    return newarr

print(countdown(5))
print(print_and_return([1,2]))
print(first_plus_length([1,2,3,4,5]))
print(values_greater_than_second([5,2,3,2,1,4]))
print( values_greater_than_second([3]) )
print(length_and_value(4,7))
print(length_and_value(6,2))