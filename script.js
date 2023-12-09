//your JS code nhere. If required.
let functionname = prompt();

function functionname() {
	let val = (arguments.callee.name);
	alert(val);
}
functionname();


