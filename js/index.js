function Nav() {
  var sidenav = document.getElementById("mySidenav");
  var width = window.getComputedStyle(sidenav).getPropertyValue("width");

  if (width === "0px" || width === "") {
    sidenav.style.width = "250px";
  } else {
    sidenav.style.width = "0px";
  }
}
