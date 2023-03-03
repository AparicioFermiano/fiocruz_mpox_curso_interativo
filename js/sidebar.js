var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("sidebar").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "includes/sidebar.html", true);
xhttp.send();

function open_sidebar(){
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('btn_open_sidebar').style.display = 'none';
};

function close_sidebar(){
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('btn_open_sidebar').style.display = 'block';
};

