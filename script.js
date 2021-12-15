function compute2()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML=principal;

    // document.getElementById("result").innerHTML="If you deposit ";


}

function compute(){
    document.getElementById("result").innerHTML = "Hello World";
  }

function updateRate() 
{
    var rateval = document.getElementById("interest").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        