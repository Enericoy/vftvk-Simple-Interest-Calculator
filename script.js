function compute(){

    // Again check the amount if positive
    if (check_principal()){

    p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("interest").value;
    var years = document.getElementById("years").value;

    // Caculate interest:
    var interest = principal * years * rate /100;

    // Calculate year:
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit <mark>"+ principal +" </mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
  }
}

// Change percentage when the slider is moved:
function updateRate() 
{
    var rateval = document.getElementById("interest").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

// Check for positive amount
function check_principal(){
    var value = document.getElementById('principal').value;
            if ( value <= 0) {
                 alert("Enter a positive number!");
                 document.getElementById("principal").focus();
                 return false;
            } else {
                return true;
            }

}
        