function init() {   
    // Draw Water
    _.each(terrain['water'], function(obj) {
        drawTerrain(obj, 'water');
    });

    // Draw Hills
    _.each(terrain['hills'], function(obj) {
        drawTerrain(obj, 'hills');
    });

    // Draw Bangladeshi Infantry
    _.each(terrain['units']['bangladesh']['infantry'], function(coord) {
        drawUnit(coord, 'infantry', 'bangladesh');
    });

    // Draw Pakistani Infantry
    _.each(terrain['units']['pakistan']['infantry'], function(coord) {
        drawUnit(coord, 'infantry', 'pakistan');
    });
}


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

/*
 * Draw Unit based on given type and country
 * @param coord the x and y co-ordinates of the hex pertraining to the unit
 * @param type the type of the unit e.g. infantry
 * @param country the country that the unit 
 * belongs to e.g. bangladesh
 */
function drawUnit(coord, unitType, country) {
    var unitDiv = constructUnitDiv(unitType, country, coord[2]);

    $('.y'+coord[1]).find('.x'+coord[0]).find('.top').after(unitDiv);
}


function constructUnitDiv(unitType, country, health) {
    var capitalizedUnitType = unitType.charAt(0).toUpperCase() + unitType.substring(1);

    return "<div class='"+unitType+" "+country+"'>"+capitalizedUnitType+" "+health+"</div>";
}