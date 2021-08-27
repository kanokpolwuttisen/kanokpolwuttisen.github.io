let number = [];
let average = 0;
let len = 0 ;
function readInput(text) {
    while (true) {
        let text = prompt("Enter an integer (a negative integer to quit:)");
        if (isNaN(text)) {
            continue
        } else if (Math.sign(text) == -1) {
            if(number.length == 0){
                number[0] = 0;
                average = 0;
            }
            break;
        } else if ((Math.sign(text) == 1 || Math.sign(text) == 0)) {
            number.push(text);
            len = 1;
        }
    }
}

function displayStats() {
    let min = number[0];
    let max = number[0];
    for (let i = 0; i < number.length; i++) {
        if (number[i] < min) min = number[i];
        if (number[i] > max) max = number[i];
        var x = parseFloat(number[i]);
        average += x;
    }
    
    average = average/number.length;
    if(len == 0){
        alert("For the list that is empty" + ", the average is " + average + ", the minimum is " + min + ", and the maximum is " + max);
    } else{
        alert("For the list that " + number + ", the average is " + average + ", the minimum is " + min + ", and the maximum is " + max);
    }
    
}

list = readInput();
displayStats(list);