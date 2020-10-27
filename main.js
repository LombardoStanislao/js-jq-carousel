$(document).ready(function() {


    $('.next i').click(function() {

        // Giocando con la classe .active, faccio si che le immagini switchino tra loro

        var imageDisplayed = $('img.active').removeClass('active').next().addClass('active');

        

    });

});
