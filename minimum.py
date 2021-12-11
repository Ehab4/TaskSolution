Numbers = {
    "number_1": "10.5",
    "number_2": 20,
    "number_3": 3.5
}

def minimum(numbers_dic):
    min_value = float("inf")
    min_key = 0
    for key, value in numbers_dic.items():
        if float(value) < float(min_value):
            min_value = value
            min_key = x

    return min_key, min_value

print(minimum(Numbers))
    
