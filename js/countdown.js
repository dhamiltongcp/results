function countdown() {
  var today_date = new Date();
  var hr_date = new Date("June 20, 2020 12:00:00");

  var t_date_ms = Date.parse(today_date);
  var h_date_ms = Date.parse(hr_date);

  var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365;

  var dif_ms = h_date_ms - t_date_ms;
  var f_days = Math.floor( dif_ms / days );
  var f_hours = Math.floor(( dif_ms - f_days * days ) / hours);
  var f_mins = Math.floor((dif_ms - ((f_hours * hours) + (f_days *days))) / minutes);

  document.getElementById('days').innerHTML = f_days;
  document.getElementById('hours').innerHTML = f_hours;
  document.getElementById('mins').innerHTML = f_mins;

}
