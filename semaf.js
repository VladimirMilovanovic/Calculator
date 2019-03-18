function semafor(){

    var boje = document.getElementsByClassName("boje");
    boje[0].style.background = "red";
    boje[1].style.background = "grey";
    boje[2].style.background = "grey";

    function zuto(){
        boje[1].style.background = "yellow";
    }

    function zeleno(){
        boje[0].style.background = "grey";
        boje[1].style.background = "grey";
        boje[2].style.background = "green";
    }

    function promena(){
        boje[1].style.background = "yellow";
        boje[2].style.background = "grey";
    }

    var x = setTimeout(zuto,2000);
    var y = setTimeout(zeleno,3000);
    var z = setTimeout(promena,6000);
}

semafor();
setInterval(function(){semafot();},14000);