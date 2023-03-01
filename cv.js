function mostrarOcultarDatoss(oculto,parte,bot){

    var info = document.getElementById(oculto);
    var p= document.getElementById(parte);
    var boton = document.getElementById(bot);

    if(info.style.display==="none"){
        info.style.display="inline";
        p.style.border= "2px solid #a05377";
        p.style.borderRadius="5px";
        boton.innerText="Ocultar";

    }
    else{
        info.style.display="none";
        p.style.border="none";
        p.style.borderTop="2px solid #a05377";
        p.style.borderRadius="0px";
        boton.innerText="Ver";
    }
}

document.getElementById("boton1").addEventListener("click", function(){
    mostrarOcultarDatoss("oculto1","p1","boton1");
});

document.getElementById("boton2").addEventListener("click", function(){
    mostrarOcultarDatoss("oculto2","p2","boton2");
});

document.getElementById("boton3").addEventListener("click", function(){
    mostrarOcultarDatoss("oculto3","p3","boton3");
});

document.getElementById("boton4").addEventListener("click", function(){
    mostrarOcultarDatoss("oculto4","p4","boton4");
});

document.getElementById("boton5").addEventListener("click", function(){
    mostrarOcultarDatoss("oculto5","p5","boton5");
});






