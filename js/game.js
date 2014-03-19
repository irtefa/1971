$(document).ready(function () {
    init();

    $(document).on('click', '.infantry', function(e) {
        currentInfantry = $(this);

        // Move the infantry to a new hex
        $(document).on('click', '.hex', function(e) {
            $(this).find('.top').after(currentInfantry);
        });
    });

    $(document).on('click', '.menu-button', function(e) {
        $('.map-container').hide();
    });
});