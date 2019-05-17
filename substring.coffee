assert = (flag) -> if not flag then throw 'assert error!'
print = console.log 

substring = (left, right, start, stop) -> 
    if start == 0 and stop == left.length + right.length
        left+right
    else
        left_start = start
        left_stop = stop
        left_sub = if start>left.length then "" else left.slice left_start,left_stop
        right_sub = ""
        left_sub + right_sub

assert "abcdef" == substring "abc","def", 0, 6
assert "a" == substring "abc","def", 0, 1
assert "abc" == substring "abc","def", 0, 3
assert "c" == substring "abc","def", 2, 3
assert not ("d" == substring "abc","def", 3, 4)

# "abc", "def", 2,5 -> "cde"   
 