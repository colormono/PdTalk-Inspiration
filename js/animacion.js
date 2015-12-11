// Al cargar la ventana
window.onload = function(){

    // Lista de elementos para animar
    // #miNombre === id="miNombre"

    var preloader = $("#preloader"),
        logo = $("#logo"),
        planta = $("#planta");


    // Animación de elementos sueltos (Ej.: Simular preloader)
    // TweenMax.to( target, duration, { vars } );
    TweenMax.to(preloader, 2, { width:"100%" });
    TweenMax.to(preloader, 1, { width:"0", opacity: 0, delay: 2, onComplete: comenzarAnimacion });


    // Linea de tiempo principal
    var tl = new TimelineMax({ paused: true });

    function comenzarAnimacion(){
        tl.play();
        tl.to(logo, 2, { opacity: 1, top:"-=20" });
        tl.to(planta, 2, { opacity: 1, top:"-=20" });
    }

}