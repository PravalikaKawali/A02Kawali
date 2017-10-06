function butn()
{
        var numberoflines = $("#primaryincome").val();
        var costperline = $("#otherincome").val();
        
    if($("#primaryincome").val() == "" ) throw alert("Primary Income should not be empty!!!!");
    if($("#otherincome").val() == "" ) throw alert("Other income should not be empty!!");
    

       var y = calc2(numberoflines,costperline);
       $("#totalamountremaining").val(y);
 
}

function calc2(numberoflines,costperline)
{
    
     if (!(isNaN(parseInt(numberoflines)) && !(isNaN(parseInt(costperline))))) {
            var x = parseInt(numberoflines) * parseInt(costperline);
                   }
      return x;
    }

