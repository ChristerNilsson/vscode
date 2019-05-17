assert = (a,b) -> 
	if a != b
		print 'assert failure:'
		print a
		print b
		throw 'assert failure!'

print = console.log 

HH = 
	'00':'12'
	'13':'01'
	'14':'02'
	'15':'03'
	'16':'04'
	'17':'05'
	'18':'06'
	'19':'07'
	'20':'08'
	'21':'09'
	'22':'10'
	'23':'11' 

f = (hhmm) ->
	hh = hhmm.slice 0,2
	mm = hhmm.slice 3,5
	ampm = if hhmm < '12:00' then 'am' else 'pm'
	if hh of HH then hh=HH[hh]
	hh+':'+mm+' '+ampm

assert '12:00 am', f '00:00' 
assert '12:01 am', f '00:01'
assert '12:59 am', f '00:59'
assert '01:00 am', f '01:00'
assert '11:59 am', f '11:59'
assert '12:00 pm', f '12:00'
assert '12:01 pm', f '12:01'
assert '12:59 pm', f '12:59'
assert '01:00 pm', f '13:00'
assert '11:59 pm', f '23:59'

print 'Ok'