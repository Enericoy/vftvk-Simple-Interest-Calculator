function compute(){

    // Again check the amount if positive
    if (check_principal()){

    p = document.getElementById("principal").value;

    var price = document.getElementById("principal").value;
    var value_gbp = ((price/100)*7262);
    var bought_gbp = 4041.71;

    // Caculate P_L:
    var P_L = value_gbp-bought_gbp;
    var percentage_PL = ((value_gbp-bought_gbp)/bought_gbp)*100;

    document.getElementById("result").innerHTML="Previous Value : £" +
     bought_gbp.toFixed(2) + "\<br\>Current Value : £" + value_gbp.toFixed(2) + "\<br\>Current P/L : <mark> £"+
      P_L.toFixed(2) + " (" + percentage_PL.toFixed(2) + "%)" + " </mark> \<br\>Current breakeven point is 56p";
  }
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
        