var toRegex = function (str) {
	var string = str
	var array = string.split('')
	var regex = "/"
	for(var i = 0; i < array.length; i++) {
		switch(array[i]) {
			case "\"":
				regex += "\\\""
			case "\\":
				regex += "\\\\"
			break
			case "[":
				regex += "\\["
			break
			case "/":
				regex += "\\/"
			break
			case "^":
				regex += "\\^"
			break
			case "$":
				regex += "\\$"
			break
			case ".":
				regex += "\\."
			break
			case "|":
				regex += "\\|"
			break
			case "?":
				regex += "\\$"
			break
			case "*":
				regex += "\\*"
			break
			case "+":
				regex += "\\+"
			break
			case "(":
				regex += "\\("
			break
			case ")":
				regex += "\\)"
			break
			default:
				regex += array[i]
		}	
	 }
 		regex += "/"
 		return regex
 }

var escape = function (str) {
	var string = str
	var array = string.split('')
	var escaped = ''
	for(var i = 0; i < array.length; i++) {
		switch(array[i]) {
			case "\"":
				escaped += "\\\""
			case "\\":
				escaped += "\\\\"
			break
			case "[":
				escaped += "\\["
			break
			case "/":
				escaped += "\\/"
			break
			case "^":
				escaped += "\\^"
			break
			case "$":
				escaped += "\\$"
			break
			case ".":
				escaped += "\\."
			break
			case "|":
				escaped += "\\|"
			break
			case "?":
				escaped += "\\$"
			break
			case "*":
				escaped += "\\*"
			break
			case "+":
				escaped += "\\+"
			break
			case "(":
				escaped += "\\("
			break
			case ")":
				escaped += "\\)"
			break
			default:
				escaped += array[i]
		 }
	 }
	 return escaped
}
 
 exports.toRegex = toRegex
 exports.escape = escape