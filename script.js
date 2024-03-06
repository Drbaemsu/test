
function addNumbers() {
    var a = parseInt(document.getElementById('num1').value);
    var b = parseInt(document.getElementById('num2').value);

    if (!isNaN(a) && !isNaN(b)) {
        document.getElementById('result').innerText = "a + b = " + (a + b);
    } else {
        document.getElementById('result').innerText = "올바른 숫자를 입력하세요.";
    }
}
