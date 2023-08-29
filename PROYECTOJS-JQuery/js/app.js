'use strict'

$(document).ready(function(){
    // Slider
    $(".slider").bxSlider({
        mode: 'fade',
        captions: true,

    });


    //Post
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado:  ' + new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est optio exercitationem magnam nihil alias porro nulla autem maxime unde labore, officia eos nobis, repellendus ex aperiam laudantium hic provident rem. Nihil ipsum explicabo impedit et sunt? Eveniet nam deleniti recusandae minus esse accusantium repellat illum sit nemo iste facere iusto dolore tempore eum sint animi, aperiam omnis saepe dicta rem!'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado:  ' + new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est optio exercitationem magnam nihil alias porro nulla autem maxime unde labore, officia eos nobis, repellendus ex aperiam laudantium hic provident rem. Nihil ipsum explicabo impedit et sunt? Eveniet nam deleniti recusandae minus esse accusantium repellat illum sit nemo iste facere iusto dolore tempore eum sint animi, aperiam omnis saepe dicta rem!'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado:  ' + new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est optio exercitationem magnam nihil alias porro nulla autem maxime unde labore, officia eos nobis, repellendus ex aperiam laudantium hic provident rem. Nihil ipsum explicabo impedit et sunt? Eveniet nam deleniti recusandae minus esse accusantium repellat illum sit nemo iste facere iusto dolore tempore eum sint animi, aperiam omnis saepe dicta rem!'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado:  ' + new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est optio exercitationem magnam nihil alias porro nulla autem maxime unde labore, officia eos nobis, repellendus ex aperiam laudantium hic provident rem. Nihil ipsum explicabo impedit et sunt? Eveniet nam deleniti recusandae minus esse accusantium repellat illum sit nemo iste facere iusto dolore tempore eum sint animi, aperiam omnis saepe dicta rem!'
        },
    ]

    posts.forEach((item, index) => {
        var post =`
        <article class="article">
        <h2 class="title-article">${item.title}</h2>
        <p class="subtitle-article">${item.date}</p>
        <p class="article-text">${item.content}</p>
        <a href="https://google.com" style ="color: white"><button class="article-button">Leer más</button></a>
    </article>`;

    $('#page-articles').append(post);

    })

    // Cambiador de temas

    var orb = $('#bubble')
    var body = $('body')
    var mainPage = $('.main-page')
    var dark = $('#dark-mode')
    var title = $('.title-article')
    var logo = $('.main-title')
    var liHover = $('li')
    var text = $('.article-text')
    var button = $('.article-button')
    var pTitle = $('.first-p') 
    var pText = $('.second-p') 
    var label = $('label')
    var sun = $('.sun') 
    var moon = $('.moon') 
    var acordeonT = $('.acordeon-title')
    var reloj = $('#clock')
    orb.click(function() {
        if(!orb.hasClass('click')) {

        orb.addClass('click');

        orb.animate({
            marginLeft: "36px"
        }, 'slow')

        liHover.mouseover(function () { 
            $(this).css('background', 'rgb(20, 184, 143)')
        });

        liHover.mouseout(function () { 
            liHover.css('background', 'rgb(83, 83, 83)')
        });

        body.removeClass('background')
        body.addClass('body-dark');
        mainPage.css('background-image', 'linear-gradient(to right, #434343 0%, black 100%)')
        dark.css('background', 'white')
        orb.css('background', 'rgb(53, 53, 53)')
        title.css('color', 'rgb(20, 184, 143)')
        logo.css('background', 'rgb(20, 184, 143)')
        text.css('color', 'white')
        button.css('background', 'rgb(20, 184, 143)')
            .css('color', 'black')
        pTitle.css('color', 'white')
        pText.css('color', 'white') 
        label.css('color', 'white')
        sun.css('filter', 'brightness(10%)')
        moon.css('filter', 'brightness(100%)')
        acordeonT.css('color', 'rgb(20, 184, 143)' )
        reloj.css('border', '5px dashed white' )
        .css('color', 'rgb(20, 184, 143)' )
        } else {

            if(orb.hasClass('click')) {
                orb.removeClass('click');

            orb.animate({
            marginLeft: "0"
        }, 'slow')

        liHover.mouseover(function () { 
            $(this).css('background', 'green')
        });

        liHover.mouseout(function () { 
            liHover.css('background', 'rgb(83, 83, 83)')
        });

        body.removeClass('body-dark')
        body.addClass('background');
        mainPage.css('background', 'white')
        dark.css('background', 'rgb(53, 53, 53)')
        orb.css('background', 'white')
        title.css('color', 'green')
        logo.css('background', 'green')
        text.css('color', 'black')
        button.css('background', 'green')
            .css('color', 'white')
        pTitle.css('color', 'black')
        pText.css('color', 'black') 
        label.css('color', 'black')
        sun.css('filter', 'brightness(100%)')
        moon.css('filter', 'brightness(10%)')
        acordeonT.css('color', 'green' )
        reloj.css('border', '5px dashed #333' )
        .css('color', 'green' )
            }
        }
    })

    // Scroll Up

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.up').addClass('show');
        } else {
            $('.up').removeClass('show');
        }
});

    $('.up').click(function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop:0
        },'slow')
        return false;
    })

    // Falso login

    $('.user form').submit(function(e) {

        var form_name = $('#name').val()
        var form_email = $('#email').val()
        var form_pass = $('#pass').val()
        
        if(form_name == ''   || form_email == ''  || form_pass == ''  ) {
            alert("Completa todos los campos");
            e.preventDefault()
        }

        localStorage.setItem("form_name", form_name)
        localStorage.setItem("form_email", form_email)
        localStorage.setItem("form_pass", form_pass)

    })

        var form_name = localStorage.getItem("form_name")
        var form_email = localStorage.getItem("form_email")
        var form_pass = localStorage.getItem("form_pass")

        if(form_name != null  || form_email != null  || form_pass != null  ) {
            $('.user').css('display','none')
            pText.html("Bienvenido/a: " + form_name + ", puede consultar sus datos por consola o tambíen cerrar la sesión: " )
            console.log(form_name, form_email, form_pass);
            pText.append('<a href="index.html" id="logout">Cerrar sesión </a>')
            $("#logout").click(function () {
                localStorage.clear();
            })
        }
        
    // Acordeon
    
    if(window.location.href.indexOf('about') > -1) {
    $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1) {
    setInterval(()=> {
        var reloj = moment().format("h:mm:ss")
    $("#clock").html(reloj)
    }, 1000)
    
    }

    // Contacto-Validacion
    if(window.location.href.indexOf('contact') > -1) {

    $("form input[name = 'date']").datepicker({
        dateFormat: 'dd-mm-yy'
    })
    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollTopOnError: true
    })

    $(".form").submit(function (e) {
        alert("Datos enviados correctamente");
        e.preventDefault()
    })
}


    
    
    

});
