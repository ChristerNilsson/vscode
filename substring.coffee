assert = (flag) -> if not flag then throw 'assert error!'
print = console.log 

substring = (left, right, start, stop) -> 
    if start == 0 and stop == left.length + right.length
        left+right

assert "abcdef" == substring "abc","def", 0, 6

# "abc", "def", 2,5 -> "cde"   
 