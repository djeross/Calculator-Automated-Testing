// select all the buttons

// select the <input type="text" class="display" disabled> element


var memory="";
var operator_sequence=0;
var validex=true;
var first=true
var mrctwice=0;
ignore_operator_sequence=["MRC","M+","M-","=","C","+/-","sqrt","%"]



function startUpCalculator(){
  const buttons = document.querySelectorAll('button');
	buttons.forEach(function(button) {
    if(button.value=="."){
      varc="."
    }else if (button.value=="MRC") {
      button.addEventListener('dblclick', ()=> {
        memory="";
        document.querySelector('.display').value=""; 
        validex=true;
      });
      button.addEventListener('click', calculate);
      
    }
    else{
      button.addEventListener('click', calculate);
    }

	});
}

// calculate function
function calculate(event) {
  if (event.target.className=="operator" && !first  && !ignore_operator_sequence.includes(event.target.value)){ // ensuring that certain operaters are flagged as invalid if the follow another operator
    operator_sequence+=1
    if (operator_sequence>1){
      var disp= document.querySelector('.display').value;
      var ls= disp.split("");
      var op1= ls[ls.length - 1];
      var op2= event.target.value;
      if ((op1==="/" || op1==="*") && (op2==="+" || op2==="-")) { //ensure that 2/-2 is valid and 2/*2 is in valid
        validex=true;
      }
      else{
        validex=false;
      }
    }else{
      validex=true;
    }
  }
  else{
    operator_sequence=0
  }
  first=false

  var display = document.querySelector('.display');
  // current clicked buttons value
  const clickedButtonValue = event.target.value;


  if (clickedButtonValue === 'sqrt') {
    var maths=eval(Math.sqrt(display.value))
    display.value =maths ;
    memory=maths;
    return
  }

  if (clickedButtonValue === 'M-') {
    if (memory==="" && memory ){
      return
    }
    maths=memory-eval(display.value);
    display.value = maths;
    memory = maths;
    return
  }

  if (clickedButtonValue === 'M+') {
    if (memory===""){
      return
    }
    maths=memory+eval(display.value);
    display.value = maths;
    memory = maths;
    return
  }

  if (clickedButtonValue === 'MRC') {
    validex=true;
    display.value = memory;
    return
  }

  if (clickedButtonValue === 'percent') {
    maths=eval(display.value/100);
    display.value = maths;
    memory = maths;
    return
  }

  if (clickedButtonValue === "+/-") {
    maths=eval(display.value/-1);
    display.value = maths;
    return
  }





  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    var disp= document.querySelector('.display').value;
    var ls= disp.split("");
    var lastop= ls[ls.length - 1];
    if (["+","-","/","*"].includes(lastop)) {
      display.value = "Invalid Expression";
      return
    }
      
    if (display.value !== '') {
      // calculate and show the answer to display
      if (validex) {
        var maths=eval(display.value)
        display.value =maths ;
        memory=maths;
      }
      else{
        display.value = "Invalid Expression"
      
      }
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
    validex=true;
    first=true
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}

startUpCalculator();