function compute() //Compute the interest and display the output
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal > 0) {
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }
    else {
        alert("Enter a positive number ");
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML=""; //purge any previous results
    }
    
}
function updateRate() //Update the rate when the slider changes
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
/* I created this function to validate the principal inpute as soon as you change focus
function checkPrincipal(principalInput) //Validate that the amount given is a positive number
{
    var principal = principalInput.value;
    var previousValue;
    if (principal > 0) {
        //alert(principal);
    }
    else {
        alert("Enter a positive number ");
        principalInput.focus();
    }
}
*/