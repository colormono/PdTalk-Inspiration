// Al cargar la ventana
window.onload = function(){

    // Lista de elementos para animar
    // #miNombre === id="miNombre"

    var preloader = $("#preloader"),
        logo = $("#logo"),
        planta = $("#planta"),
        copo = $(".copos"),
        saludo = $("#saludo");


    // Animación de elementos sueltos (Ej.: Simular preloader)
    // TweenMax.to( target, duration, { vars } );
    TweenMax.to(preloader, 2, { width:"100%" });
    TweenMax.to(preloader, 1, { width:"0", opacity: 0, delay: 2, onComplete: apertura });

    function apertura(){
        TweenMax.to(logo, 2, { opacity: 1, top:"-=20", onComplete: comenzarAnimacionFiestas });
    }

    // Linea de tiempo principal
    function comenzarAnimacionFiestas(){

        var tl = new TimelineMax();

        // Curvas de animación: http://greensock.com/ease-visualizer
        tl.to($("body"), 1, { backgroundColor: "#4d6340" });
        tl.to([planta], 1, { scale: 2, ease:Elastic.easeOut, onComplete: mostrarCopos });

        // TweenMax.fromTo( target, duration, { fromVars }, { toVars } );
        tl.fromTo(saludo, 1, { scale: 0, ease:Elastic.easeOut }, { opacity: 1, scale: 1.2, bottom: "-=50" });

        //tl.reverse();
        return timeline;
    }

    function mostrarCopos(){
        // TweenMax.staggerFrom( target, duration, { vars }, timeBetween );
        TweenMax.staggerTo(copo, 2, { autoAlpha: 1, opacity: 1, rotation:360, transformOrigin:"50% 50%", scale: 0.3, bottom: "-200px", yoyo: true, repeat: -1 }, 0.2);
    }

}

// Un ejemplo copado: http://codepen.io/magalhaespaulo/pen/OyQeQv