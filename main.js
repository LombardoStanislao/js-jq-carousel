$(document).ready(function() {


    $('.next i').click(function() {

        // Giocando con la classe .active, faccio si che le immagini switchino tra loro

        var imageDisplayed = $('img.active');

        imageDisplayed.removeClass('active');


        if (imageDisplayed.hasClass('last')) {

            $('.carousel img:first-of-type').addClass('active');
        } else {
            imageDisplayed.next().addClass('active');
        }

        if ($('.fa-circle').hasClass('fas')) {

            $('.fa-circle').removeClass('fas').next().addClass('far')

        }



    });

    $('.prev i').click(function() {

        var imageDisplayed = $('img.active');

        imageDisplayed.removeClass('active');

        if (imageDisplayed.hasClass('first')) {

            $('.carousel img:last-of-type').addClass('active');

        } else {
            imageDisplayed.prev().addClass('active');
        }

    });

});
