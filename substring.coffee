assert = (flag) -> if not flag then throw new Error 'assert error!'
print = console.log 

assert true 