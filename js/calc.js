$(document).ready(function(){
  doMath();
});
var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

function doMath(){
  $('#equals').on('click', function(){
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    operator = operator.val();
      result(num1,num2,operator)
  })
}
//const input = document.querySelector('input')


document.querySelector('#number1').addEventListener('keydown', function(event) {
  if (isNaN(event.key)) {
    alert("this is not a number, but instead it is a string");
    return event.preventDefault()
    
  }
})

document.querySelector('#number2').addEventListener('keydown', function(event) {
  if (isNaN(event.key)) {
    alert("this is not a number, but instead it is a string");
    return event.preventDefault()
    
  }
})





var answer;
function result (num1,num2,operator){
  if (isNaN(num1)){
  answer = ("there is no answer")
   $("#result").html(answer)
  }
  else if (isNaN(num2)){
    
  answer = ("there is no answer")
   $("#result").html(answer)
   
  }
  else {
  if (operator == "-"){
    answer = (num1-num2)
  }
  else if (operator == "+"){
    answer = (num1+num2)
  }
  else if (operator == "/"){
    answer = (num1/num2)
  }
  else if (operator == "*"){
    answer = (num1*num2)
  }
  else {
    answer = ("not an operation")
  }
   $("#result").html(answer)
 
  }
 
}
