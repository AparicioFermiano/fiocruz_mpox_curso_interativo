var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

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