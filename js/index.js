function Nav() {
  var sidenav = document.getElementById("mySidenav");
  var marginRight = window.getComputedStyle(sidenav).getPropertyValue("margin-right");
  var btn = document.getElementById('btn-sidebar');
  if (marginRight === "-350px" || marginRight === "") {
    sidenav.style.marginRight = "0px";
    btn.className = btn.className.replace('btn-sidebar-light', 'btn-sidebar-dark');
  } else {
    sidenav.style.marginRight = "-350px";
    btn.className = btn.className.replace('btn-sidebar-dark', 'btn-sidebar-light');
  }
}
