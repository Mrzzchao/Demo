(function() {
    var spt = document.getElementById('support');
    if(window.WebSocket) {
        spt.innerHTML = "support HTML5 WebSocket";
    }
    else {
        spt.innerHTML = "not support HTML5 WebSocket";
    }
})();
