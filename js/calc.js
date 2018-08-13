$(document).ready(function(){
  doMath();
});
var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

function doMath(){
  $('#equals').on('click', function(){
    num1 = parseFloat(num1.va1());
    
  })
}