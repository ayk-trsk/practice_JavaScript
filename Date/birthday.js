function birthdaySet(){
  var yobi = new Array( "日","月","火","水","木","金","土" );
  var date = new Date( document.birthday.year.value, document.birthday.month.value-1, document.birthday.date.value );
  var week = date.getDay();
  document.birthday.week.value = yobi[week] + "曜日";
}
