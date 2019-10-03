window.addEventListener("load", function() {
    var nodes = document.querySelectorAll(".blur > *");
    
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.animationDelay = (i * 1) + 's';
    }
});
