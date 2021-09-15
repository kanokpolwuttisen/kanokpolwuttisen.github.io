let number = [];
let average = 0;
let avg_emp = 0;
let len
let min = 0;
let max = 0;
function readInput() {
    while (true) {
        let text = prompt("Enter an integer (a negative integer to quit:)");
        let arr = text.split("");
        console.log(isString(text));
        if() {

        }
        else if(isNaN(parseFloat(text))) {
            alert("xsaxasx");
            continue;
        }
        else if (Math.sign(text) == -1 || Math.sign(text) == NaN) {
            if (number.length == 0) {
                number[0] = 0;
                len = 0;
            }
            break;
        } else if ((Math.sign(text) == 1 || Math.sign(text) == 0)) {
            number.push(text);
            len = 1;
        }
    }
}

function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

function displayStats() {
    let filtered = number.filter(function (n) {
        return n || n === 0;
    });
    min = Math.min(...filtered);
    max = Math.max(...filtered);
    
    for (let i = 0; i < filtered.length; i++) {
        average += parseFloat(filtered[i]);
    }

    average /= filtered.length;

    filtered.sort(function (a, b) {
        return a - b;
    });

    var emp = (len == 1) ? "For the list that is " + filtered + ", the average is " + average + ", the minimum is " + min + ", and the maximum is " + max  // 2.ternary operator
        : "For the list that is empty, the average is " + avg_emp + ", the minimum is " + min + ", and the maximum is " + max;
    alert(filtered);
    console.log(filtered.length);
    console.log(filtered);

    alert(emp);

    // if (len == 0) {
    //     alert("For the list that is empty" + ", the average is " + average + ", the minimum is " + min + ", and the maximum is " + max);
    // } else {
    //     alert("For the list that " + filtered + ", the average is " + average + ", the minimum is " + min + ", and the maximum is " + max);
    // }

}

list = readInput(); // 1.use this function from assignment
displayStats(list); //
