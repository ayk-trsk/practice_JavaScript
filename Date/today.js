function myFunc(){
  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var week = today.getDay();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

  var yobi = new Array("日", "月", "火", "水", "木", "金", "土");
  var time = year + "年" + month + "月" + day + "日" + "(" + yobi[week] + ")" + hour + "時" + minute + "分" + second + "秒";
  document.Form.FormTime.value = time;
}

setInterval("myFunc()",1000);
