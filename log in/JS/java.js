function secondtheme() {
    document.getElementById("link").href = "css/style1.css";
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "jquery.js"; 
    document.getElementsByTagName("head")[0].appendChild(script);
    return false;
}		