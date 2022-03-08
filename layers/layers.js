var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_destdv250k_2gw_1 = new ol.format.GeoJSON();
var features_destdv250k_2gw_1 = format_destdv250k_2gw_1.readFeatures(json_destdv250k_2gw_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_destdv250k_2gw_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_destdv250k_2gw_1.addFeatures(features_destdv250k_2gw_1);
var lyr_destdv250k_2gw_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_destdv250k_2gw_1, 
                style: style_destdv250k_2gw_1,
                interactive: true,
                title: '<img src="styles/legend/destdv250k_2gw_1.png" /> destdv250k_2gw'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_destdv250k_2gw_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_destdv250k_2gw_1];
lyr_destdv250k_2gw_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'ENTIDAD': 'ENTIDAD', 'CAPITAL': 'CAPITAL', 'RASGO_GEOG': 'RASGO_GEOG', 'NUM_EDO': 'NUM_EDO', });
lyr_destdv250k_2gw_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'CAPITAL': 'TextEdit', 'RASGO_GEOG': 'TextEdit', 'NUM_EDO': 'TextEdit', });
lyr_destdv250k_2gw_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'ENTIDAD': 'no label', 'CAPITAL': 'inline label', 'RASGO_GEOG': 'no label', 'NUM_EDO': 'no label', });
lyr_destdv250k_2gw_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});