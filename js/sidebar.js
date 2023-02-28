var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("sidebar").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "includes/sidebar.html", true);
xhttp.send();

document.getElementById('open-sidebar-btn').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('close-sidebar-btn').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('open-sidebar-btn').style.display = 'block';
});