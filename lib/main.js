$('.input-data').on('change paste keyup', function () {
    let antennaDet = Number($('#antenna-det-input').val());
    let minAzimuth = Number($('#min-azimuth-input').val());
    let maxAzimuth = Number($('#max-azimuth-input').val());
    let minElevation = Number($('#min-elevation-input').val());
    let maxElevation = Number($('#max-elevation-input').val());

    // Calculate Azimuth
    // Get minAzimuth + Antenna Det
    // Get maxAzimuth - Antenna Det
    let minAzimuthCalc = minAzimuth + antennaDet;
    let maxAzimuthCalc = maxAzimuth - antennaDet;
    let averageAzimuthCalc = (minAzimuthCalc + maxAzimuthCalc) / 2;

    // Calculate Elevation
    let minElevationCalc = minElevation + antennaDet;
    let maxElevationCalc = maxElevation - antennaDet;
    let averageElevation = (minElevationCalc + maxElevationCalc) / 2;

    $('#azimuth-result').html('Azimuth Min: ' + minAzimuthCalc.toFixed(4) + "<br /><br />" + 'Azimuth Max: ' + maxAzimuthCalc.toFixed(4) + '<br /><br />Azimuth Average: ' + averageAzimuthCalc.toFixed(4) + "<br /><br />");
    $('#elevation-result').html('Elevation: ' + minElevationCalc.toFixed(4) + "<br /><br />" + 'Elevation Max: ' + maxElevationCalc.toFixed(4) + '<br /><br />Elevation Average: ' + averageElevation.toFixed(4) + "<br /><br />");
});

$(document).ready(function () {
    $('#azimuth-result').html('Azimuth Min: 0' + "<br /><br />" + 'Azimuth Max: 0' + '<br /><br />Azimuth Average: 0<br /><br />');
    $('#elevation-result').html('Elevation: 0' + "<br /><br />" + 'Elevation Max: 0' + '<br /><br />Elevation Average: 0<br /><br />');
});

