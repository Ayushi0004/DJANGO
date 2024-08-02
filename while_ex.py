secret_uname, secret_pwd = 'admin' , 'admin'
while True:
    print("Welcome to admin login")
    username = input('enter username: ')
    password = input('enter password: ')
    if username == secret_uname and password == secret_pwd:
        print('Login successful✅')
        break
    else:
        print('Invalid user ❌')
        print('Please try again!')