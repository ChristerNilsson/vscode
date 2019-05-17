assert = (a,b) -> 
	if a != b
		print "#{a} != #{b}"
		throw 'assert failure!'

print = console.log 

f = (hhmm) ->
	arr = hhmm.split ':'
	hh = parseInt arr[0]
	mm = parseInt arr[1]
	minutes = 60*hh+mm
	h = hh
	m = mm
	if h==0 then h=12
	if h<10 then sh = '0'+h else sh = h
	if m<10 then sm = '0'+m else sm = m
	ampm = if minutes < 12*60 then 'am' else 'pm'
	"#{sh}:#{sm} #{ampm}"

assert '12:00 am', f '00:00'
# assert '12:01 am', f '00:01'
# assert '12:59 am', f '00:59'
# assert '01:00 am', f '01:00'
# assert '11:59 am', f '11:59'
# assert '12:00 pm', f '12:00'
# assert '12:01 pm', f '12:01'
# assert '12:59 pm', f '12:59'
# assert '01:00 pm', f '13:00'
# assert '11:59 pm', f '23:59'
