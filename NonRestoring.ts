console.log("In Non Restoring js");
const dividendInput = document.getElementById("dividend")! as HTMLInputElement;
const divisorInput = document.getElementById("divisor") as HTMLInputElement;
const runBtn = document.getElementById("runBtn");

runBtn.addEventListener('click', function(){
    console.log(+dividendInput.value);
    console.log(+divisorInput.value);
});