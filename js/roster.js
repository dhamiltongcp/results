function openClose(cl_name) {
  if ((document.documentElement.clientWidth) < '800'){
    x=document.getElementsByClassName(cl_name);
    if (x[0].getAttribute('style') == null || x[0].getAttribute('style') == 'display: none;'){
      x[0].style.display="inline-block";
      x[1].style.display="inline-block";
    }
    else {
      x[0].style.display="none";
      x[1].style.display="none";
    }
  }
}
