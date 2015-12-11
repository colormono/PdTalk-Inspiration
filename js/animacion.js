// Al cargar la ventana
window.onload = function(){

    // Lista de elementos para animar
    // #miNombre === id="miNombre"

    var preloader = $("#preloader"),
        logo = $("#logo"),
        planta = $("#planta"),
        copo = $(".copos");


    // Animación de elementos sueltos (Ej.: Simular preloader)
    // TweenMax.to( target, duration, { vars } );
    TweenMax.to(preloader, 2, { width:"100%" });
    TweenMax.to(preloader, 1, { width:"0", opacity: 0, delay: 2, onComplete: apertura });


    // Linea de tiempo principal
    function apertura(){
        var tl = new TimelineMax();

        tl.to($("body"), 0.5, { backgroundColor: "#fbf4e9" });
        tl.to(logo, 2, { opacity: 1, top:"-=20" });
        tl.to(planta, 2, { opacity: 1, top:"-=20", onComplete: sacudirPlanta });
        //tl.reverse();

        return timeline;
    }

    function sacudirPlanta(){
        // Curvas de animación: http://greensock.com/ease-visualizer
        TweenMax.to([planta], 1, { scale: 2, ease:Elastic.easeOut, onComplete: mostrarCopos });
    }

    function mostrarCopos(){
        // TweenMax.staggerFrom( target, duration, { vars }, timeBetween );
        TweenMax.staggerTo(copo, 2, { autoAlpha: 1, opacity: 0, rotation:360, transformOrigin:"50% 50%", scale: 0.3, bottom: "-=30", yoyo: true, repeat: -1 }, 0.2);
    }

}