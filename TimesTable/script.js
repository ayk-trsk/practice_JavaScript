function numberSet(){
  document.numberForm.form1.value = Math.floor(Math.random()*9)+1;
  document.numberForm.form2.value = Math.floor(Math.random()*9)+1;
  document.numberForm.formA.value = "";
}

function numberCheck(){
  number1 = eval(document.numberForm.form1.value);
  number2 = eval(document.numberForm.form2.value);
  numberA = eval(document.numberForm.formA.value);
  answer = number1 * number2;
  if (answer == numberA){
    alert("正解");
  }else{
    alert("不正解");
  }
  numberSet();
}