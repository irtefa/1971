$(document).ready(function () {
    _.each(terrain['water'], function(obj) {
        drawTerrain(obj, 'water');
    });
});


/*
 * Draw terrain based on given type
 * @param coord the x and y co-ordinates of the hex pertraining to the terrain
 * @param type the type of the terrain e.g. water, grass etc. [By default, everything is grass]
 */

function drawTerrain(coord, type) {
    // Top
    $('.y'+coord[1]).find('.x'+coord[0]).find('.top').addClass('top-'+type);
    $('.y'+coord[1]).find('.x'+coord[0]).find('.top').removeClass('top');

    // Middle
    $('.y'+coord[1]).find('.x'+coord[0]).find('.middle').addClass('middle-'+type);
    $('.y'+coord[1]).find('.x'+coord[0]).find('.middle').removeClass('middle');

    // Bottom
    $('.y'+coord[1]).find('.x'+coord[0]).find('.bottom').addClass('bottom-'+type);
    $('.y'+coord[1]).find('.x'+coord[0]).find('.bottom').removeClass('bottom');
}