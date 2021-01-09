console.log("In Restoring js");
var dividendInput = document.getElementById("dividend");
var divisorInput = document.getElementById("divisor");
var runBtn = document.getElementById("runBtn");
runBtn.addEventListener('click', function () {
    console.log(+dividendInput.value);
    console.log(+divisorInput.value);
});
