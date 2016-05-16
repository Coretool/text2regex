function toRegex (str) {
	var string = str
	var array = string.split('')
	var regex = "/"
	for(var i = 0; i < array.length; i++) {
		switch(array[i]) {
			case "\\":
				regex += "\\\\"
			break
			case "[":
				regex += "\["
			break
			case "/":
				regex += "\/"
			break
			case "^":
				regex += "\^"
			break
			case "$":
				regex += "\$"
			break
			case ".":
				regex += "\."
			break
			case "|":
				regex += "\|"
			break
			case "?":
				regex += "\$"
			break
			case "*":
				regex += "\*"
			break
			case "+":
				regex += "\+"
			break
			case "(":
				regex += "\("
			break
			case ")":
				regex += "\)"
			break
			default:
				regex += array[i]
		}	
	 }
 		regex += "/"
 		return regex
 }
 
 exports.toRegex = toRegex()