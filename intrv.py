
def check():
    return f"he"
print(check())
#     print("he")
# check()

# def even_or_odd(num): incorrect?
#     int(input("Enter number: "))
    
#     if num % 2 == 0:
#         print("even")
#     else:
#         print("odd")
        
# even_or_odd(x)

def even_or_odd(num):
    
    if num % 2 == 0:
        print("even")
    else:
        print("odd")
     
x = int(input("Enter number: "))
even_or_odd(x)

# or

def even_or_odd():
    num = int(input("Enter number: "))
    
    if num % 2 == 0:
        print("even")
    else:
        print("odd")
        
even_or_odd()