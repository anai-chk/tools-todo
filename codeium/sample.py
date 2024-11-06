# フィボナッチ数列を出力するプログラム

def fibonacci(n):
    if n == 0:
        return 0    
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
    
def show_fibonaccis(n):
    for i in range(n):
        print(fibonacci(i))

show_fibonaccis(10)

# 偶数下記数か判定するプログラム

def is_even(n):
    if n == 0:
        return True
    else:
        return is_odd(n-1)

def is_odd(n):    
    if n == 0:    
        return False
    else:
        return is_even(n-1)

def show_evens(n):
    for i in range(n):
        if is_even(i):
            print(i)

show_evens(10)

