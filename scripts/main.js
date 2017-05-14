 function main() {

    console.log("in main function");
    var myForm  = document.getElementById("pizzaOrder");
    myForm.addEventListener("submit",validateForm);
  }
function validateForm(event){
	var myForm  = document.getElementById("pizzaOrder");
	
	for(var i = 0; i < form.topping.length; i++) {
         if (form.topping[i].checked){
            //this block of code is executed 
            document.getElementById("toppingRequired").style.display = "none";
			
        //stop form from submitting
        event.preventDefault();
    } else {
			document.getElementById("toppingRequired").style.display = "block";
			
         }
     }

  
  