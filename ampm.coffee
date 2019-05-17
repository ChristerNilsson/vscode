assert = (a,b) -> 
	if a != b
		print "#{a} != #{b}"
		throw 'assert failure!'

print = console.log 

