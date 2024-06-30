function insert(num) {
    let myString = document.form.textview.value;
    let lastChar = myString[myString.length - 1];

    if (myString.length < 30) {
        if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
            document.form.textview.value = myString + num;
        }
    } else if (num != lastChar) {
        document.form.textview.value = myString.slice(0, -1) + num;
    }
}

function equal() {
    let sum = document.form.textview.value
    if (sum) {
        document.form.textview.value = eval(sum)
    }
}

function clean() {
    document.form.textview.value = ""
}

function back() {
    let back = document.form.textview.value
    document.form.textview.value = back.substring(0, back.length - 1)
}