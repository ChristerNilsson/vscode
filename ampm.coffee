assert = (a,b) -> 
	if a != b
		print "#{a} != #{b}"
		throw 'assert failure!'

print = console.log 

# assert '12:00 am', f '00:00'
# assert '12:01 am', f '00:01'
# assert '12:59 am', f '00:59'
# assert '01:00 am', f '01:00'
# assert '11:59 am', f '11:59'
# assert '12:00 pm', f '12:00'
# assert '12:01 pm', f '12:01'
# assert '12:59 pm', f '12:59'
# assert '01:00 pm', f '13:00'
# assert '11:59 pm', f '23:59'
