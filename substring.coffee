assert = (flag) -> if not flag then throw 'assert error!'
print = console.log 

substring = (left, right, start, stop) -> 
    left + right
    
assert "abcdef" == substring "abc","def", 0, 6

# "abc", "def", 2,5 -> "cde"   
 