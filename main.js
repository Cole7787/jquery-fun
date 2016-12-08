


$('document').ready(function() {

    var hamburger = $('.hamburger-container');
    var menu = $('.mobile-menu');
    var overlay = $('.overlay');

    function handleMenu() {
        if(menu.hasClass('show-menu')) {
            //menu is closed
            menu.removeClass('show-menu');
            menu.addClass('remove-menu');
            overlay.fadeOut();
        } else {
            //menu is open
            menu.addClass('show-menu');
            menu.removeClass('remove-menu');
            overlay.fadeIn();
        }
    }

    hamburger.on('click', function() {
        handleMenu();
    });

    overlay.on('click', function() {
        handleMenu();
    });

});

