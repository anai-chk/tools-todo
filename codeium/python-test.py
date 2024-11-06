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
    
def main():
    show_fibonaccis(10)
    
main()