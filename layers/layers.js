var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Ecuador_1 = new ol.format.GeoJSON();
var features_Ecuador_1 = format_Ecuador_1.readFeatures(json_Ecuador_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecuador_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecuador_1.addFeatures(features_Ecuador_1);
var lyr_Ecuador_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecuador_1, 
                style: style_Ecuador_1,
                popuplayertitle: 'Ecuador',
                interactive: false,
                title: '<img src="styles/legend/Ecuador_1.png" /> Ecuador'
            });
var format_Provincias_2 = new ol.format.GeoJSON();
var features_Provincias_2 = format_Provincias_2.readFeatures(json_Provincias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_2.addFeatures(features_Provincias_2);
var lyr_Provincias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincias_2, 
                style: style_Provincias_2,
                popuplayertitle: 'Provincias',
                interactive: false,
                title: '<img src="styles/legend/Provincias_2.png" /> Provincias'
            });
var format_Cantones_3 = new ol.format.GeoJSON();
var features_Cantones_3 = format_Cantones_3.readFeatures(json_Cantones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantones_3.addFeatures(features_Cantones_3);
var lyr_Cantones_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantones_3, 
                style: style_Cantones_3,
                popuplayertitle: 'Cantones',
                interactive: false,
                title: '<img src="styles/legend/Cantones_3.png" /> Cantones'
            });
var format_Parroquias_4 = new ol.format.GeoJSON();
var features_Parroquias_4 = format_Parroquias_4.readFeatures(json_Parroquias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parroquias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parroquias_4.addFeatures(features_Parroquias_4);
var lyr_Parroquias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parroquias_4, 
                style: style_Parroquias_4,
                popuplayertitle: 'Parroquias',
                interactive: false,
                title: '<img src="styles/legend/Parroquias_4.png" /> Parroquias'
            });
var format_ReservasJocotoco_5 = new ol.format.GeoJSON();
var features_ReservasJocotoco_5 = format_ReservasJocotoco_5.readFeatures(json_ReservasJocotoco_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservasJocotoco_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservasJocotoco_5.addFeatures(features_ReservasJocotoco_5);
var lyr_ReservasJocotoco_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservasJocotoco_5, 
                style: style_ReservasJocotoco_5,
                popuplayertitle: 'Reservas Jocotoco',
                interactive: false,
                title: '<img src="styles/legend/ReservasJocotoco_5.png" /> Reservas Jocotoco'
            });
var format_PaisajeBuenaventura_6 = new ol.format.GeoJSON();
var features_PaisajeBuenaventura_6 = format_PaisajeBuenaventura_6.readFeatures(json_PaisajeBuenaventura_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaisajeBuenaventura_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaisajeBuenaventura_6.addFeatures(features_PaisajeBuenaventura_6);
var lyr_PaisajeBuenaventura_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaisajeBuenaventura_6, 
                style: style_PaisajeBuenaventura_6,
                popuplayertitle: 'Paisaje Buenaventura',
                interactive: false,
                title: '<img src="styles/legend/PaisajeBuenaventura_6.png" /> Paisaje Buenaventura'
            });
var format_PaisajePodocarpusElCondor_7 = new ol.format.GeoJSON();
var features_PaisajePodocarpusElCondor_7 = format_PaisajePodocarpusElCondor_7.readFeatures(json_PaisajePodocarpusElCondor_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaisajePodocarpusElCondor_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaisajePodocarpusElCondor_7.addFeatures(features_PaisajePodocarpusElCondor_7);
var lyr_PaisajePodocarpusElCondor_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaisajePodocarpusElCondor_7, 
                style: style_PaisajePodocarpusElCondor_7,
                popuplayertitle: 'Paisaje Podocarpus-El Condor ',
                interactive: false,
                title: '<img src="styles/legend/PaisajePodocarpusElCondor_7.png" /> Paisaje Podocarpus-El Condor '
            });
var format_PaisajeAndesAmazonia_8 = new ol.format.GeoJSON();
var features_PaisajeAndesAmazonia_8 = format_PaisajeAndesAmazonia_8.readFeatures(json_PaisajeAndesAmazonia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaisajeAndesAmazonia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaisajeAndesAmazonia_8.addFeatures(features_PaisajeAndesAmazonia_8);
var lyr_PaisajeAndesAmazonia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaisajeAndesAmazonia_8, 
                style: style_PaisajeAndesAmazonia_8,
                popuplayertitle: 'Paisaje Andes-Amazonia ',
                interactive: false,
                title: '<img src="styles/legend/PaisajeAndesAmazonia_8.png" /> Paisaje Andes-Amazonia '
            });
var format_Derrumbe_9 = new ol.format.GeoJSON();
var features_Derrumbe_9 = format_Derrumbe_9.readFeatures(json_Derrumbe_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrumbe_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Derrumbe_9.addFeatures(features_Derrumbe_9);
var lyr_Derrumbe_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Derrumbe_9, 
                style: style_Derrumbe_9,
                popuplayertitle: 'Derrumbe',
                interactive: true,
                title: '<img src="styles/legend/Derrumbe_9.png" /> Derrumbe'
            });
var format_Extraccindefauna_10 = new ol.format.GeoJSON();
var features_Extraccindefauna_10 = format_Extraccindefauna_10.readFeatures(json_Extraccindefauna_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Extraccindefauna_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Extraccindefauna_10.addFeatures(features_Extraccindefauna_10);
var lyr_Extraccindefauna_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Extraccindefauna_10, 
                style: style_Extraccindefauna_10,
                popuplayertitle: 'Extracción de fauna',
                interactive: true,
                title: '<img src="styles/legend/Extraccindefauna_10.png" /> Extracción de fauna'
            });
var format_Ganado_11 = new ol.format.GeoJSON();
var features_Ganado_11 = format_Ganado_11.readFeatures(json_Ganado_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ganado_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ganado_11.addFeatures(features_Ganado_11);
var lyr_Ganado_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ganado_11, 
                style: style_Ganado_11,
                popuplayertitle: 'Ganado',
                interactive: true,
                title: '<img src="styles/legend/Ganado_11.png" /> Ganado'
            });
var format_Inundacin_12 = new ol.format.GeoJSON();
var features_Inundacin_12 = format_Inundacin_12.readFeatures(json_Inundacin_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inundacin_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inundacin_12.addFeatures(features_Inundacin_12);
var lyr_Inundacin_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inundacin_12, 
                style: style_Inundacin_12,
                popuplayertitle: 'Inundación',
                interactive: true,
                title: '<img src="styles/legend/Inundacin_12.png" /> Inundación'
            });
var format_Invasin_13 = new ol.format.GeoJSON();
var features_Invasin_13 = format_Invasin_13.readFeatures(json_Invasin_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Invasin_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Invasin_13.addFeatures(features_Invasin_13);
var lyr_Invasin_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Invasin_13, 
                style: style_Invasin_13,
                popuplayertitle: 'Invasión',
                interactive: true,
                title: '<img src="styles/legend/Invasin_13.png" /> Invasión'
            });
var format_Tala_14 = new ol.format.GeoJSON();
var features_Tala_14 = format_Tala_14.readFeatures(json_Tala_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tala_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tala_14.addFeatures(features_Tala_14);
var lyr_Tala_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tala_14, 
                style: style_Tala_14,
                popuplayertitle: 'Tala',
                interactive: true,
                title: '<img src="styles/legend/Tala_14.png" /> Tala'
            });
var format_Caceria_15 = new ol.format.GeoJSON();
var features_Caceria_15 = format_Caceria_15.readFeatures(json_Caceria_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caceria_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caceria_15.addFeatures(features_Caceria_15);
var lyr_Caceria_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caceria_15, 
                style: style_Caceria_15,
                popuplayertitle: 'Caceria',
                interactive: true,
                title: '<img src="styles/legend/Caceria_15.png" /> Caceria'
            });
var format_Ganado_16 = new ol.format.GeoJSON();
var features_Ganado_16 = format_Ganado_16.readFeatures(json_Ganado_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ganado_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ganado_16.addFeatures(features_Ganado_16);
var lyr_Ganado_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ganado_16, 
                style: style_Ganado_16,
                popuplayertitle: 'Ganado',
                interactive: true,
                title: '<img src="styles/legend/Ganado_16.png" /> Ganado'
            });
var format_Invasin_17 = new ol.format.GeoJSON();
var features_Invasin_17 = format_Invasin_17.readFeatures(json_Invasin_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Invasin_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Invasin_17.addFeatures(features_Invasin_17);
var lyr_Invasin_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Invasin_17, 
                style: style_Invasin_17,
                popuplayertitle: 'Invasión',
                interactive: true,
                title: '<img src="styles/legend/Invasin_17.png" /> Invasión'
            });
var format_Perros_18 = new ol.format.GeoJSON();
var features_Perros_18 = format_Perros_18.readFeatures(json_Perros_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perros_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perros_18.addFeatures(features_Perros_18);
var lyr_Perros_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perros_18, 
                style: style_Perros_18,
                popuplayertitle: 'Perros',
                interactive: true,
                title: '<img src="styles/legend/Perros_18.png" /> Perros'
            });
var format_Tala_19 = new ol.format.GeoJSON();
var features_Tala_19 = format_Tala_19.readFeatures(json_Tala_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tala_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tala_19.addFeatures(features_Tala_19);
var lyr_Tala_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tala_19, 
                style: style_Tala_19,
                popuplayertitle: 'Tala',
                interactive: true,
                title: '<img src="styles/legend/Tala_19.png" /> Tala'
            });
var format_Conflictogentefauna_20 = new ol.format.GeoJSON();
var features_Conflictogentefauna_20 = format_Conflictogentefauna_20.readFeatures(json_Conflictogentefauna_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conflictogentefauna_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conflictogentefauna_20.addFeatures(features_Conflictogentefauna_20);
var lyr_Conflictogentefauna_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conflictogentefauna_20, 
                style: style_Conflictogentefauna_20,
                popuplayertitle: 'Conflicto gente fauna',
                interactive: true,
                title: '<img src="styles/legend/Conflictogentefauna_20.png" /> Conflicto gente fauna'
            });
var format_Derrumbe_21 = new ol.format.GeoJSON();
var features_Derrumbe_21 = format_Derrumbe_21.readFeatures(json_Derrumbe_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrumbe_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Derrumbe_21.addFeatures(features_Derrumbe_21);
var lyr_Derrumbe_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Derrumbe_21, 
                style: style_Derrumbe_21,
                popuplayertitle: 'Derrumbe',
                interactive: true,
                title: '<img src="styles/legend/Derrumbe_21.png" /> Derrumbe'
            });
var format_Aperturadecaminosotrocha_22 = new ol.format.GeoJSON();
var features_Aperturadecaminosotrocha_22 = format_Aperturadecaminosotrocha_22.readFeatures(json_Aperturadecaminosotrocha_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aperturadecaminosotrocha_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aperturadecaminosotrocha_22.addFeatures(features_Aperturadecaminosotrocha_22);
var lyr_Aperturadecaminosotrocha_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aperturadecaminosotrocha_22, 
                style: style_Aperturadecaminosotrocha_22,
                popuplayertitle: 'Apertura de caminos o trocha',
                interactive: true,
                title: '<img src="styles/legend/Aperturadecaminosotrocha_22.png" /> Apertura de caminos o trocha'
            });
var format_Caceria_23 = new ol.format.GeoJSON();
var features_Caceria_23 = format_Caceria_23.readFeatures(json_Caceria_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caceria_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caceria_23.addFeatures(features_Caceria_23);
var lyr_Caceria_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caceria_23, 
                style: style_Caceria_23,
                popuplayertitle: 'Caceria',
                interactive: true,
                title: '<img src="styles/legend/Caceria_23.png" /> Caceria'
            });
var format_Ganado_24 = new ol.format.GeoJSON();
var features_Ganado_24 = format_Ganado_24.readFeatures(json_Ganado_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ganado_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ganado_24.addFeatures(features_Ganado_24);
var lyr_Ganado_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ganado_24, 
                style: style_Ganado_24,
                popuplayertitle: 'Ganado',
                interactive: true,
                title: '<img src="styles/legend/Ganado_24.png" /> Ganado'
            });
var format_Inundacion_25 = new ol.format.GeoJSON();
var features_Inundacion_25 = format_Inundacion_25.readFeatures(json_Inundacion_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inundacion_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inundacion_25.addFeatures(features_Inundacion_25);
var lyr_Inundacion_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inundacion_25, 
                style: style_Inundacion_25,
                popuplayertitle: 'Inundacion',
                interactive: true,
                title: '<img src="styles/legend/Inundacion_25.png" /> Inundacion'
            });
var format_Mineria_26 = new ol.format.GeoJSON();
var features_Mineria_26 = format_Mineria_26.readFeatures(json_Mineria_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mineria_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mineria_26.addFeatures(features_Mineria_26);
var lyr_Mineria_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mineria_26, 
                style: style_Mineria_26,
                popuplayertitle: 'Mineria',
                interactive: true,
                title: '<img src="styles/legend/Mineria_26.png" /> Mineria'
            });
var format_Roboodao_27 = new ol.format.GeoJSON();
var features_Roboodao_27 = format_Roboodao_27.readFeatures(json_Roboodao_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roboodao_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roboodao_27.addFeatures(features_Roboodao_27);
var lyr_Roboodao_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roboodao_27, 
                style: style_Roboodao_27,
                popuplayertitle: 'Robo o daño',
                interactive: true,
                title: '<img src="styles/legend/Roboodao_27.png" /> Robo o daño'
            });
var format_Tala_28 = new ol.format.GeoJSON();
var features_Tala_28 = format_Tala_28.readFeatures(json_Tala_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tala_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tala_28.addFeatures(features_Tala_28);
var lyr_Tala_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tala_28, 
                style: style_Tala_28,
                popuplayertitle: 'Tala',
                interactive: true,
                title: '<img src="styles/legend/Tala_28.png" /> Tala'
            });
var format_Derrumbe_29 = new ol.format.GeoJSON();
var features_Derrumbe_29 = format_Derrumbe_29.readFeatures(json_Derrumbe_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrumbe_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Derrumbe_29.addFeatures(features_Derrumbe_29);
var lyr_Derrumbe_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Derrumbe_29, 
                style: style_Derrumbe_29,
                popuplayertitle: 'Derrumbe',
                interactive: true,
                title: '<img src="styles/legend/Derrumbe_29.png" /> Derrumbe'
            });
var format_Ganado_30 = new ol.format.GeoJSON();
var features_Ganado_30 = format_Ganado_30.readFeatures(json_Ganado_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ganado_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ganado_30.addFeatures(features_Ganado_30);
var lyr_Ganado_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ganado_30, 
                style: style_Ganado_30,
                popuplayertitle: 'Ganado',
                interactive: true,
                title: '<img src="styles/legend/Ganado_30.png" /> Ganado'
            });
var format_Basura_31 = new ol.format.GeoJSON();
var features_Basura_31 = format_Basura_31.readFeatures(json_Basura_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basura_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basura_31.addFeatures(features_Basura_31);
var lyr_Basura_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basura_31, 
                style: style_Basura_31,
                popuplayertitle: 'Basura',
                interactive: true,
                title: '<img src="styles/legend/Basura_31.png" /> Basura'
            });
var format_Contaminacinlquidos_32 = new ol.format.GeoJSON();
var features_Contaminacinlquidos_32 = format_Contaminacinlquidos_32.readFeatures(json_Contaminacinlquidos_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contaminacinlquidos_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contaminacinlquidos_32.addFeatures(features_Contaminacinlquidos_32);
var lyr_Contaminacinlquidos_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contaminacinlquidos_32, 
                style: style_Contaminacinlquidos_32,
                popuplayertitle: 'Contaminación (líquidos)',
                interactive: true,
                title: '<img src="styles/legend/Contaminacinlquidos_32.png" /> Contaminación (líquidos)'
            });
var format_Entradasinpermiso_33 = new ol.format.GeoJSON();
var features_Entradasinpermiso_33 = format_Entradasinpermiso_33.readFeatures(json_Entradasinpermiso_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entradasinpermiso_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entradasinpermiso_33.addFeatures(features_Entradasinpermiso_33);
var lyr_Entradasinpermiso_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entradasinpermiso_33, 
                style: style_Entradasinpermiso_33,
                popuplayertitle: 'Entrada sin permiso',
                interactive: true,
                title: '<img src="styles/legend/Entradasinpermiso_33.png" /> Entrada sin permiso'
            });
var format_Derrumbe_34 = new ol.format.GeoJSON();
var features_Derrumbe_34 = format_Derrumbe_34.readFeatures(json_Derrumbe_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrumbe_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Derrumbe_34.addFeatures(features_Derrumbe_34);
var lyr_Derrumbe_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Derrumbe_34, 
                style: style_Derrumbe_34,
                popuplayertitle: 'Derrumbe',
                interactive: true,
                title: '<img src="styles/legend/Derrumbe_34.png" /> Derrumbe'
            });
var format_Ganado_35 = new ol.format.GeoJSON();
var features_Ganado_35 = format_Ganado_35.readFeatures(json_Ganado_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ganado_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ganado_35.addFeatures(features_Ganado_35);
var lyr_Ganado_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ganado_35, 
                style: style_Ganado_35,
                popuplayertitle: 'Ganado',
                interactive: true,
                title: '<img src="styles/legend/Ganado_35.png" /> Ganado'
            });
var format_Quema_36 = new ol.format.GeoJSON();
var features_Quema_36 = format_Quema_36.readFeatures(json_Quema_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quema_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quema_36.addFeatures(features_Quema_36);
var lyr_Quema_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quema_36, 
                style: style_Quema_36,
                popuplayertitle: 'Quema',
                interactive: true,
                title: '<img src="styles/legend/Quema_36.png" /> Quema'
            });
var format_Roboodaodeinfraestructura_37 = new ol.format.GeoJSON();
var features_Roboodaodeinfraestructura_37 = format_Roboodaodeinfraestructura_37.readFeatures(json_Roboodaodeinfraestructura_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roboodaodeinfraestructura_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roboodaodeinfraestructura_37.addFeatures(features_Roboodaodeinfraestructura_37);
var lyr_Roboodaodeinfraestructura_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roboodaodeinfraestructura_37, 
                style: style_Roboodaodeinfraestructura_37,
                popuplayertitle: 'Robo o daño de infraestructura',
                interactive: true,
                title: '<img src="styles/legend/Roboodaodeinfraestructura_37.png" /> Robo o daño de infraestructura'
            });
var group_Amenazasenero2026 = new ol.layer.Group({
                                layers: [lyr_Basura_31,lyr_Contaminacinlquidos_32,lyr_Entradasinpermiso_33,lyr_Derrumbe_34,lyr_Ganado_35,lyr_Quema_36,lyr_Roboodaodeinfraestructura_37,],
                                fold: 'close',
                                title: 'Amenazas enero-2026'});
var group_Amenazasfebrero2026 = new ol.layer.Group({
                                layers: [lyr_Derrumbe_29,lyr_Ganado_30,],
                                fold: 'close',
                                title: 'Amenazas febrero-2026'});
var group_Amenazasmarzo2026 = new ol.layer.Group({
                                layers: [lyr_Derrumbe_21,lyr_Aperturadecaminosotrocha_22,lyr_Caceria_23,lyr_Ganado_24,lyr_Inundacion_25,lyr_Mineria_26,lyr_Roboodao_27,lyr_Tala_28,],
                                fold: 'close',
                                title: 'Amenazas marzo-2026'});
var group_Amenazasabril2026 = new ol.layer.Group({
                                layers: [lyr_Caceria_15,lyr_Ganado_16,lyr_Invasin_17,lyr_Perros_18,lyr_Tala_19,lyr_Conflictogentefauna_20,],
                                fold: 'close',
                                title: 'Amenazas abril-2026'});
var group_Amenazasmayo2026 = new ol.layer.Group({
                                layers: [lyr_Derrumbe_9,lyr_Extraccindefauna_10,lyr_Ganado_11,lyr_Inundacin_12,lyr_Invasin_13,lyr_Tala_14,],
                                fold: 'close',
                                title: 'Amenazas mayo-2026'});
var group_Chakana = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Chakana'});
var group_ElChaco = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'El Chaco'});
var group_Narupa = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Narupa'});
var group_Yanacocha = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Yanacocha'});
var group_Ayampe = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ayampe'});
var group_Copalinga = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Copalinga'});
var group_LasBalsas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Las Balsas'});
var group_Cuyuja = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cuyuja'});
var group_MindoYaguira = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mindo-Yaguira'});
var group_Tapichalaca = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Tapichalaca'});
var group_AndesAmazonia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Andes Amazonia'});
var group_ChocoAndes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Choco-Andes '});
var group_PodocarpusElCondor = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Podocarpus-El Condor'});
var group_Ecuador = new ol.layer.Group({
                                layers: [lyr_Ecuador_1,lyr_Provincias_2,lyr_Cantones_3,lyr_Parroquias_4,],
                                fold: 'close',
                                title: 'Ecuador'});

lyr_OpenTopoMap_0.setVisible(true);lyr_Ecuador_1.setVisible(true);lyr_Provincias_2.setVisible(true);lyr_Cantones_3.setVisible(true);lyr_Parroquias_4.setVisible(true);lyr_ReservasJocotoco_5.setVisible(true);lyr_PaisajeBuenaventura_6.setVisible(true);lyr_PaisajePodocarpusElCondor_7.setVisible(true);lyr_PaisajeAndesAmazonia_8.setVisible(true);lyr_Derrumbe_9.setVisible(true);lyr_Extraccindefauna_10.setVisible(true);lyr_Ganado_11.setVisible(true);lyr_Inundacin_12.setVisible(true);lyr_Invasin_13.setVisible(true);lyr_Tala_14.setVisible(true);lyr_Caceria_15.setVisible(true);lyr_Ganado_16.setVisible(true);lyr_Invasin_17.setVisible(true);lyr_Perros_18.setVisible(true);lyr_Tala_19.setVisible(true);lyr_Conflictogentefauna_20.setVisible(true);lyr_Derrumbe_21.setVisible(true);lyr_Aperturadecaminosotrocha_22.setVisible(true);lyr_Caceria_23.setVisible(true);lyr_Ganado_24.setVisible(true);lyr_Inundacion_25.setVisible(true);lyr_Mineria_26.setVisible(true);lyr_Roboodao_27.setVisible(true);lyr_Tala_28.setVisible(true);lyr_Derrumbe_29.setVisible(true);lyr_Ganado_30.setVisible(true);lyr_Basura_31.setVisible(true);lyr_Contaminacinlquidos_32.setVisible(true);lyr_Entradasinpermiso_33.setVisible(true);lyr_Derrumbe_34.setVisible(true);lyr_Ganado_35.setVisible(true);lyr_Quema_36.setVisible(true);lyr_Roboodaodeinfraestructura_37.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,group_Ecuador,lyr_ReservasJocotoco_5,lyr_PaisajeBuenaventura_6,lyr_PaisajePodocarpusElCondor_7,lyr_PaisajeAndesAmazonia_8,group_Amenazasmayo2026,group_Amenazasabril2026,group_Amenazasmarzo2026,group_Amenazasfebrero2026,group_Amenazasenero2026];
lyr_Ecuador_1.set('fieldAliases', {'NEWFIELD1': 'NEWFIELD1', 'COUNT_': 'COUNT_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Nombre': 'Nombre', });
lyr_Provincias_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PROVIN_': 'PROVIN_', 'PROVIN_ID': 'PROVIN_ID', 'AREA_1': 'AREA_1', 'PERIMETE_1': 'PERIMETE_1', 'PROVINCIAL': 'PROVINCIAL', 'PROVINCI_1': 'PROVINCI_1', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'PROFINC_': 'PROFINC_', 'PROFINC_ID': 'PROFINC_ID', 'NOMBRE': 'NOMBRE', 'REGION': 'REGION', 'CAPITAL60': 'CAPITAL60', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Cantones_3.set('fieldAliases', {'CANTON': 'CANTON', 'COUNT_': 'COUNT_', 'AVE_AREA': 'AVE_AREA', 'SUM_AREA': 'SUM_AREA', 'MIN_AREA': 'MIN_AREA', 'MAX_AREA': 'MAX_AREA', 'STDDEV_ARE': 'STDDEV_ARE', 'VAR_AREA': 'VAR_AREA', 'AVE_PERIME': 'AVE_PERIME', 'SUM_PERIME': 'SUM_PERIME', 'MIN_PERIME': 'MIN_PERIME', 'MAX_PERIME': 'MAX_PERIME', 'STDDEV_PER': 'STDDEV_PER', 'VAR_PERIME': 'VAR_PERIME', 'AVE_PARRGE': 'AVE_PARRGE', 'SUM_PARRGE': 'SUM_PARRGE', 'MIN_PARRGE': 'MIN_PARRGE', 'MAX_PARRGE': 'MAX_PARRGE', 'STDDEV_PAR': 'STDDEV_PAR', 'VAR_PARRGE': 'VAR_PARRGE', 'AVE_PARR_1': 'AVE_PARR_1', 'SUM_PARR_1': 'SUM_PARR_1', 'MIN_PARR_1': 'MIN_PARR_1', 'MAX_PARR_1': 'MAX_PARR_1', 'STDDEV_P_1': 'STDDEV_P_1', 'VAR_PARR_1': 'VAR_PARR_1', 'AVE_CODIGO': 'AVE_CODIGO', 'SUM_CODIGO': 'SUM_CODIGO', 'MIN_CODIGO': 'MIN_CODIGO', 'MAX_CODIGO': 'MAX_CODIGO', 'STDDEV_COD': 'STDDEV_COD', 'VAR_CODIGO': 'VAR_CODIGO', 'FIRST_CODI': 'FIRST_CODI', 'LAST_CODIG': 'LAST_CODIG', 'COUNT_CODI': 'COUNT_CODI', 'AVE_FNODE_': 'AVE_FNODE_', 'SUM_FNODE_': 'SUM_FNODE_', 'MIN_FNODE_': 'MIN_FNODE_', 'MAX_FNODE_': 'MAX_FNODE_', 'STDDEV_FNO': 'STDDEV_FNO', 'VAR_FNODE_': 'VAR_FNODE_', 'AVE_TNODE_': 'AVE_TNODE_', 'SUM_TNODE_': 'SUM_TNODE_', 'MIN_TNODE_': 'MIN_TNODE_', 'MAX_TNODE_': 'MAX_TNODE_', 'STDDEV_TNO': 'STDDEV_TNO', 'VAR_TNODE_': 'VAR_TNODE_', 'AVE_LPOLY_': 'AVE_LPOLY_', 'SUM_LPOLY_': 'SUM_LPOLY_', 'MIN_LPOLY_': 'MIN_LPOLY_', 'MAX_LPOLY_': 'MAX_LPOLY_', 'STDDEV_LPO': 'STDDEV_LPO', 'VAR_LPOLY_': 'VAR_LPOLY_', 'AVE_RPOLY_': 'AVE_RPOLY_', 'SUM_RPOLY_': 'SUM_RPOLY_', 'MIN_RPOLY_': 'MIN_RPOLY_', 'MAX_RPOLY_': 'MAX_RPOLY_', 'STDDEV_RPO': 'STDDEV_RPO', 'VAR_RPOLY_': 'VAR_RPOLY_', 'AVE_PAR_': 'AVE_PAR_', 'SUM_PAR_': 'SUM_PAR_', 'MIN_PAR_': 'MIN_PAR_', 'MAX_PAR_': 'MAX_PAR_', 'STDDEV_P_2': 'STDDEV_P_2', 'VAR_PAR_': 'VAR_PAR_', 'AVE_PAR_ID': 'AVE_PAR_ID', 'SUM_PAR_ID': 'SUM_PAR_ID', 'MIN_PAR_ID': 'MIN_PAR_ID', 'MAX_PAR_ID': 'MAX_PAR_ID', 'STDDEV_P_3': 'STDDEV_P_3', 'VAR_PAR_ID': 'VAR_PAR_ID', 'AVE_PCPARQ': 'AVE_PCPARQ', 'SUM_PCPARQ': 'SUM_PCPARQ', 'MIN_PCPARQ': 'MIN_PCPARQ', 'MAX_PCPARQ': 'MAX_PCPARQ', 'STDDEV_PCP': 'STDDEV_PCP', 'VAR_PCPARQ': 'VAR_PCPARQ', 'AVE_PCPA_1': 'AVE_PCPA_1', 'SUM_PCPA_1': 'SUM_PCPA_1', 'MIN_PCPA_1': 'MIN_PCPA_1', 'MAX_PCPA_1': 'MAX_PCPA_1', 'STDDEV_P_4': 'STDDEV_P_4', 'VAR_PCPA_1': 'VAR_PCPA_1', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_NOMBR': 'LAST_NOMBR', 'COUNT_NOMB': 'COUNT_NOMB', 'FIRST_TIPO': 'FIRST_TIPO', 'LAST_TIPO': 'LAST_TIPO', 'COUNT_TIPO': 'COUNT_TIPO', 'FIRST_NIVD': 'FIRST_NIVD', 'LAST_NIVDE': 'LAST_NIVDE', 'COUNT_NIVD': 'COUNT_NIVD', 'FIRST_PROV': 'FIRST_PROV', 'LAST_PROVI': 'LAST_PROVI', 'COUNT_PROV': 'COUNT_PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Parroquias_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PARRGEO_': 'PARRGEO_', 'PARRGEO_ID': 'PARRGEO_ID', 'CODIGO': 'CODIGO', 'CODIGOP': 'CODIGOP', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'PAR_': 'PAR_', 'PAR_ID': 'PAR_ID', 'PCPARQ_': 'PCPARQ_', 'PCPARQ_ID': 'PCPARQ_ID', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'NIVDET': 'NIVDET', 'CANTON': 'CANTON', 'PROVINCIA': 'PROVINCIA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ReservasJocotoco_5.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PaisajeBuenaventura_6.set('fieldAliases', {'Id': 'Id', 'area': 'area', 'Nombre': 'Nombre', 'area2': 'area2', });
lyr_PaisajePodocarpusElCondor_7.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PARRGEO_': 'PARRGEO_', 'PARRGEO_ID': 'PARRGEO_ID', 'CODIGO': 'CODIGO', 'CODIGOP': 'CODIGOP', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'PAR_': 'PAR_', 'PAR_ID': 'PAR_ID', 'PCPARQ_': 'PCPARQ_', 'PCPARQ_ID': 'PCPARQ_ID', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'NIVDET': 'NIVDET', 'CANTON': 'CANTON', 'PROVINCIA': 'PROVINCIA', 'area_ha': 'area_ha', });
lyr_PaisajeAndesAmazonia_8.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Area_ha': 'Area_ha', });
lyr_Derrumbe_9.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', 'field_20': 'field_20', });
lyr_Extraccindefauna_10.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', 'field_20': 'field_20', 'field_21': 'field_21', });
lyr_Ganado_11.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Inundacin_12.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Invasin_13.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', 'field_20': 'field_20', });
lyr_Tala_14.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Caceria_15.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', 'field_20': 'field_20', 'field_21': 'field_21', });
lyr_Ganado_16.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', 'field_20': 'field_20', 'field_21': 'field_21', });
lyr_Invasin_17.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', 'field_20': 'field_20', 'field_21': 'field_21', });
lyr_Perros_18.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Tala_19.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', 'field_20': 'field_20', 'field_21': 'field_21', });
lyr_Conflictogentefauna_20.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', 'field_20': 'field_20', 'field_21': 'field_21', });
lyr_Derrumbe_21.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'DISTANCIA_': 'DISTANCIA_', 'DESNIVEL_A': 'DESNIVEL_A', 'TIEMPO_TOT': 'TIEMPO_TOT', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', 'field_20': 'field_20', });
lyr_Aperturadecaminosotrocha_22.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'DISTANCIA_': 'DISTANCIA_', 'DESNIVEL_A': 'DESNIVEL_A', 'TIEMPO_TOT': 'TIEMPO_TOT', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Caceria_23.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'DISTANCIA_': 'DISTANCIA_', 'DESNIVEL_A': 'DESNIVEL_A', 'TIEMPO_TOT': 'TIEMPO_TOT', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Ganado_24.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'DISTANCIA_': 'DISTANCIA_', 'DESNIVEL_A': 'DESNIVEL_A', 'TIEMPO_TOT': 'TIEMPO_TOT', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Inundacion_25.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'DISTANCIA_': 'DISTANCIA_', 'DESNIVEL_A': 'DESNIVEL_A', 'TIEMPO_TOT': 'TIEMPO_TOT', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Mineria_26.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'DISTANCIA_': 'DISTANCIA_', 'DESNIVEL_A': 'DESNIVEL_A', 'TIEMPO_TOT': 'TIEMPO_TOT', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Roboodao_27.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'DISTANCIA_': 'DISTANCIA_', 'DESNIVEL_A': 'DESNIVEL_A', 'TIEMPO_TOT': 'TIEMPO_TOT', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', 'field_20': 'field_20', });
lyr_Tala_28.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'DISTANCIA_': 'DISTANCIA_', 'DESNIVEL_A': 'DESNIVEL_A', 'TIEMPO_TOT': 'TIEMPO_TOT', 'FECHA': 'FECHA', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS Y': 'RESERVAS Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO DE AM': 'TIPO DE AM', 'QU� HIZO': 'QU� HIZO', 'FOTOGRAF��': 'FOTOGRAF��', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Derrumbe_29.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Ganado_30.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Basura_31.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Contaminacinlquidos_32.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Entradasinpermiso_33.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Derrumbe_34.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Ganado_35.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Quema_36.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Roboodaodeinfraestructura_37.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Ecuador_1.set('fieldImages', {'NEWFIELD1': 'TextEdit', 'COUNT_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Provincias_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PROVIN_': 'TextEdit', 'PROVIN_ID': 'TextEdit', 'AREA_1': 'TextEdit', 'PERIMETE_1': 'TextEdit', 'PROVINCIAL': 'TextEdit', 'PROVINCI_1': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'PROFINC_': 'TextEdit', 'PROFINC_ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'REGION': 'TextEdit', 'CAPITAL60': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Cantones_3.set('fieldImages', {'CANTON': 'TextEdit', 'COUNT_': 'TextEdit', 'AVE_AREA': 'TextEdit', 'SUM_AREA': 'TextEdit', 'MIN_AREA': 'TextEdit', 'MAX_AREA': 'TextEdit', 'STDDEV_ARE': 'TextEdit', 'VAR_AREA': 'TextEdit', 'AVE_PERIME': 'TextEdit', 'SUM_PERIME': 'TextEdit', 'MIN_PERIME': 'TextEdit', 'MAX_PERIME': 'TextEdit', 'STDDEV_PER': 'TextEdit', 'VAR_PERIME': 'TextEdit', 'AVE_PARRGE': 'TextEdit', 'SUM_PARRGE': 'TextEdit', 'MIN_PARRGE': 'TextEdit', 'MAX_PARRGE': 'TextEdit', 'STDDEV_PAR': 'TextEdit', 'VAR_PARRGE': 'TextEdit', 'AVE_PARR_1': 'TextEdit', 'SUM_PARR_1': 'TextEdit', 'MIN_PARR_1': 'TextEdit', 'MAX_PARR_1': 'TextEdit', 'STDDEV_P_1': 'TextEdit', 'VAR_PARR_1': 'TextEdit', 'AVE_CODIGO': 'TextEdit', 'SUM_CODIGO': 'TextEdit', 'MIN_CODIGO': 'TextEdit', 'MAX_CODIGO': 'TextEdit', 'STDDEV_COD': 'TextEdit', 'VAR_CODIGO': 'TextEdit', 'FIRST_CODI': 'TextEdit', 'LAST_CODIG': 'TextEdit', 'COUNT_CODI': 'TextEdit', 'AVE_FNODE_': 'TextEdit', 'SUM_FNODE_': 'TextEdit', 'MIN_FNODE_': 'TextEdit', 'MAX_FNODE_': 'TextEdit', 'STDDEV_FNO': 'TextEdit', 'VAR_FNODE_': 'TextEdit', 'AVE_TNODE_': 'TextEdit', 'SUM_TNODE_': 'TextEdit', 'MIN_TNODE_': 'TextEdit', 'MAX_TNODE_': 'TextEdit', 'STDDEV_TNO': 'TextEdit', 'VAR_TNODE_': 'TextEdit', 'AVE_LPOLY_': 'TextEdit', 'SUM_LPOLY_': 'TextEdit', 'MIN_LPOLY_': 'TextEdit', 'MAX_LPOLY_': 'TextEdit', 'STDDEV_LPO': 'TextEdit', 'VAR_LPOLY_': 'TextEdit', 'AVE_RPOLY_': 'TextEdit', 'SUM_RPOLY_': 'TextEdit', 'MIN_RPOLY_': 'TextEdit', 'MAX_RPOLY_': 'TextEdit', 'STDDEV_RPO': 'TextEdit', 'VAR_RPOLY_': 'TextEdit', 'AVE_PAR_': 'TextEdit', 'SUM_PAR_': 'TextEdit', 'MIN_PAR_': 'TextEdit', 'MAX_PAR_': 'TextEdit', 'STDDEV_P_2': 'TextEdit', 'VAR_PAR_': 'TextEdit', 'AVE_PAR_ID': 'TextEdit', 'SUM_PAR_ID': 'TextEdit', 'MIN_PAR_ID': 'TextEdit', 'MAX_PAR_ID': 'TextEdit', 'STDDEV_P_3': 'TextEdit', 'VAR_PAR_ID': 'TextEdit', 'AVE_PCPARQ': 'TextEdit', 'SUM_PCPARQ': 'TextEdit', 'MIN_PCPARQ': 'TextEdit', 'MAX_PCPARQ': 'TextEdit', 'STDDEV_PCP': 'TextEdit', 'VAR_PCPARQ': 'TextEdit', 'AVE_PCPA_1': 'TextEdit', 'SUM_PCPA_1': 'TextEdit', 'MIN_PCPA_1': 'TextEdit', 'MAX_PCPA_1': 'TextEdit', 'STDDEV_P_4': 'TextEdit', 'VAR_PCPA_1': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'LAST_NOMBR': 'TextEdit', 'COUNT_NOMB': 'TextEdit', 'FIRST_TIPO': 'TextEdit', 'LAST_TIPO': 'TextEdit', 'COUNT_TIPO': 'TextEdit', 'FIRST_NIVD': 'TextEdit', 'LAST_NIVDE': 'TextEdit', 'COUNT_NIVD': 'TextEdit', 'FIRST_PROV': 'TextEdit', 'LAST_PROVI': 'TextEdit', 'COUNT_PROV': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Parroquias_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PARRGEO_': 'TextEdit', 'PARRGEO_ID': 'TextEdit', 'CODIGO': 'TextEdit', 'CODIGOP': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'PAR_': 'TextEdit', 'PAR_ID': 'TextEdit', 'PCPARQ_': 'TextEdit', 'PCPARQ_ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'NIVDET': 'TextEdit', 'CANTON': 'TextEdit', 'PROVINCIA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ReservasJocotoco_5.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PaisajeBuenaventura_6.set('fieldImages', {'Id': 'TextEdit', 'area': 'TextEdit', 'Nombre': 'TextEdit', 'area2': 'TextEdit', });
lyr_PaisajePodocarpusElCondor_7.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PARRGEO_': 'TextEdit', 'PARRGEO_ID': 'TextEdit', 'CODIGO': 'TextEdit', 'CODIGOP': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'PAR_': 'TextEdit', 'PAR_ID': 'TextEdit', 'PCPARQ_': 'TextEdit', 'PCPARQ_ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'NIVDET': 'TextEdit', 'CANTON': 'TextEdit', 'PROVINCIA': 'TextEdit', 'area_ha': 'Range', });
lyr_PaisajeAndesAmazonia_8.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_Derrumbe_9.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', 'field_20': 'TextEdit', });
lyr_Extraccindefauna_10.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', });
lyr_Ganado_11.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Inundacin_12.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Invasin_13.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', 'field_20': 'TextEdit', });
lyr_Tala_14.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Caceria_15.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', });
lyr_Ganado_16.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', });
lyr_Invasin_17.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', });
lyr_Perros_18.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Tala_19.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', });
lyr_Conflictogentefauna_20.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'CheckBox', 'rm_bande_1': 'CheckBox', 'rm_bande_2': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', });
lyr_Derrumbe_21.set('fieldImages', {'REGISTRADO': 'TextEdit', 'DISTANCIA_': 'CheckBox', 'DESNIVEL_A': 'CheckBox', 'TIEMPO_TOT': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', 'field_20': 'TextEdit', });
lyr_Aperturadecaminosotrocha_22.set('fieldImages', {'REGISTRADO': 'TextEdit', 'DISTANCIA_': 'CheckBox', 'DESNIVEL_A': 'CheckBox', 'TIEMPO_TOT': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Caceria_23.set('fieldImages', {'REGISTRADO': 'TextEdit', 'DISTANCIA_': 'CheckBox', 'DESNIVEL_A': 'CheckBox', 'TIEMPO_TOT': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Ganado_24.set('fieldImages', {'REGISTRADO': 'TextEdit', 'DISTANCIA_': 'CheckBox', 'DESNIVEL_A': 'CheckBox', 'TIEMPO_TOT': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Inundacion_25.set('fieldImages', {'REGISTRADO': 'TextEdit', 'DISTANCIA_': 'CheckBox', 'DESNIVEL_A': 'CheckBox', 'TIEMPO_TOT': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Mineria_26.set('fieldImages', {'REGISTRADO': 'TextEdit', 'DISTANCIA_': 'CheckBox', 'DESNIVEL_A': 'CheckBox', 'TIEMPO_TOT': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Roboodao_27.set('fieldImages', {'REGISTRADO': 'TextEdit', 'DISTANCIA_': 'CheckBox', 'DESNIVEL_A': 'CheckBox', 'TIEMPO_TOT': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', 'field_20': 'TextEdit', });
lyr_Tala_28.set('fieldImages', {'REGISTRADO': 'TextEdit', 'DISTANCIA_': 'CheckBox', 'DESNIVEL_A': 'CheckBox', 'TIEMPO_TOT': 'CheckBox', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO DE AM': 'TextEdit', 'QU� HIZO': 'TextEdit', 'FOTOGRAF��': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Derrumbe_29.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Ganado_30.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Basura_31.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Contaminacinlquidos_32.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Entradasinpermiso_33.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Derrumbe_34.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Ganado_35.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Quema_36.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Roboodaodeinfraestructura_37.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Ecuador_1.set('fieldLabels', {'NEWFIELD1': 'no label', 'COUNT_': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Nombre': 'no label', });
lyr_Provincias_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PROVIN_': 'no label', 'PROVIN_ID': 'no label', 'AREA_1': 'no label', 'PERIMETE_1': 'no label', 'PROVINCIAL': 'no label', 'PROVINCI_1': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'PROFINC_': 'no label', 'PROFINC_ID': 'no label', 'NOMBRE': 'no label', 'REGION': 'no label', 'CAPITAL60': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Cantones_3.set('fieldLabels', {'CANTON': 'no label', 'COUNT_': 'no label', 'AVE_AREA': 'no label', 'SUM_AREA': 'no label', 'MIN_AREA': 'no label', 'MAX_AREA': 'no label', 'STDDEV_ARE': 'no label', 'VAR_AREA': 'no label', 'AVE_PERIME': 'no label', 'SUM_PERIME': 'no label', 'MIN_PERIME': 'no label', 'MAX_PERIME': 'no label', 'STDDEV_PER': 'no label', 'VAR_PERIME': 'no label', 'AVE_PARRGE': 'no label', 'SUM_PARRGE': 'no label', 'MIN_PARRGE': 'no label', 'MAX_PARRGE': 'no label', 'STDDEV_PAR': 'no label', 'VAR_PARRGE': 'no label', 'AVE_PARR_1': 'no label', 'SUM_PARR_1': 'no label', 'MIN_PARR_1': 'no label', 'MAX_PARR_1': 'no label', 'STDDEV_P_1': 'no label', 'VAR_PARR_1': 'no label', 'AVE_CODIGO': 'no label', 'SUM_CODIGO': 'no label', 'MIN_CODIGO': 'no label', 'MAX_CODIGO': 'no label', 'STDDEV_COD': 'no label', 'VAR_CODIGO': 'no label', 'FIRST_CODI': 'no label', 'LAST_CODIG': 'no label', 'COUNT_CODI': 'no label', 'AVE_FNODE_': 'no label', 'SUM_FNODE_': 'no label', 'MIN_FNODE_': 'no label', 'MAX_FNODE_': 'no label', 'STDDEV_FNO': 'no label', 'VAR_FNODE_': 'no label', 'AVE_TNODE_': 'no label', 'SUM_TNODE_': 'no label', 'MIN_TNODE_': 'no label', 'MAX_TNODE_': 'no label', 'STDDEV_TNO': 'no label', 'VAR_TNODE_': 'no label', 'AVE_LPOLY_': 'no label', 'SUM_LPOLY_': 'no label', 'MIN_LPOLY_': 'no label', 'MAX_LPOLY_': 'no label', 'STDDEV_LPO': 'no label', 'VAR_LPOLY_': 'no label', 'AVE_RPOLY_': 'no label', 'SUM_RPOLY_': 'no label', 'MIN_RPOLY_': 'no label', 'MAX_RPOLY_': 'no label', 'STDDEV_RPO': 'no label', 'VAR_RPOLY_': 'no label', 'AVE_PAR_': 'no label', 'SUM_PAR_': 'no label', 'MIN_PAR_': 'no label', 'MAX_PAR_': 'no label', 'STDDEV_P_2': 'no label', 'VAR_PAR_': 'no label', 'AVE_PAR_ID': 'no label', 'SUM_PAR_ID': 'no label', 'MIN_PAR_ID': 'no label', 'MAX_PAR_ID': 'no label', 'STDDEV_P_3': 'no label', 'VAR_PAR_ID': 'no label', 'AVE_PCPARQ': 'no label', 'SUM_PCPARQ': 'no label', 'MIN_PCPARQ': 'no label', 'MAX_PCPARQ': 'no label', 'STDDEV_PCP': 'no label', 'VAR_PCPARQ': 'no label', 'AVE_PCPA_1': 'no label', 'SUM_PCPA_1': 'no label', 'MIN_PCPA_1': 'no label', 'MAX_PCPA_1': 'no label', 'STDDEV_P_4': 'no label', 'VAR_PCPA_1': 'no label', 'FIRST_NOMB': 'no label', 'LAST_NOMBR': 'no label', 'COUNT_NOMB': 'no label', 'FIRST_TIPO': 'no label', 'LAST_TIPO': 'no label', 'COUNT_TIPO': 'no label', 'FIRST_NIVD': 'no label', 'LAST_NIVDE': 'no label', 'COUNT_NIVD': 'no label', 'FIRST_PROV': 'no label', 'LAST_PROVI': 'no label', 'COUNT_PROV': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Parroquias_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PARRGEO_': 'no label', 'PARRGEO_ID': 'no label', 'CODIGO': 'no label', 'CODIGOP': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'PAR_': 'no label', 'PAR_ID': 'no label', 'PCPARQ_': 'no label', 'PCPARQ_ID': 'no label', 'NOMBRE': 'no label', 'TIPO': 'no label', 'NIVDET': 'no label', 'CANTON': 'no label', 'PROVINCIA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ReservasJocotoco_5.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PaisajeBuenaventura_6.set('fieldLabels', {'Id': 'no label', 'area': 'no label', 'Nombre': 'no label', 'area2': 'no label', });
lyr_PaisajePodocarpusElCondor_7.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PARRGEO_': 'no label', 'PARRGEO_ID': 'no label', 'CODIGO': 'no label', 'CODIGOP': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'PAR_': 'no label', 'PAR_ID': 'no label', 'PCPARQ_': 'no label', 'PCPARQ_ID': 'no label', 'NOMBRE': 'no label', 'TIPO': 'no label', 'NIVDET': 'no label', 'CANTON': 'no label', 'PROVINCIA': 'no label', 'area_ha': 'no label', });
lyr_PaisajeAndesAmazonia_8.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Area_ha': 'no label', });
lyr_Derrumbe_9.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'no label', 'rm_bande_1': 'no label', 'rm_bande_2': 'no label', 'FECHA': 'no label', 'HORA': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALTITUD': 'no label', 'PRECISION': 'no label', 'RESERVAS Y': 'no label', 'OTROS': 'no label', 'LOCALIDAD': 'no label', 'TIPO DE AM': 'no label', 'QU� HIZO': 'no label', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'no label', 'ESTADO': 'no label', 'field_20': 'no label', });
lyr_Extraccindefauna_10.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'no label', 'rm_bande_1': 'no label', 'rm_bande_2': 'no label', 'FECHA': 'no label', 'HORA': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALTITUD': 'no label', 'PRECISION': 'no label', 'RESERVAS Y': 'no label', 'OTROS': 'no label', 'LOCALIDAD': 'no label', 'TIPO DE AM': 'no label', 'QU� HIZO': 'no label', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'no label', 'ESTADO': 'no label', 'field_20': 'no label', 'field_21': 'no label', });
lyr_Ganado_11.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'no label', 'rm_bande_1': 'no label', 'rm_bande_2': 'no label', 'FECHA': 'no label', 'HORA': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALTITUD': 'no label', 'PRECISION': 'no label', 'RESERVAS Y': 'no label', 'OTROS': 'no label', 'LOCALIDAD': 'no label', 'TIPO DE AM': 'no label', 'QU� HIZO': 'no label', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'no label', 'ESTADO': 'no label', });
lyr_Inundacin_12.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'no label', 'rm_bande_1': 'no label', 'rm_bande_2': 'no label', 'FECHA': 'no label', 'HORA': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALTITUD': 'no label', 'PRECISION': 'no label', 'RESERVAS Y': 'no label', 'OTROS': 'no label', 'LOCALIDAD': 'no label', 'TIPO DE AM': 'no label', 'QU� HIZO': 'no label', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'no label', 'ESTADO': 'no label', });
lyr_Invasin_13.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'no label', 'rm_bande_1': 'no label', 'rm_bande_2': 'no label', 'FECHA': 'no label', 'HORA': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALTITUD': 'no label', 'PRECISION': 'no label', 'RESERVAS Y': 'no label', 'OTROS': 'no label', 'LOCALIDAD': 'no label', 'TIPO DE AM': 'no label', 'QU� HIZO': 'no label', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'no label', 'ESTADO': 'no label', 'field_20': 'no label', });
lyr_Tala_14.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'no label', 'rm_bande_1': 'no label', 'rm_bande_2': 'no label', 'FECHA': 'no label', 'HORA': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALTITUD': 'no label', 'PRECISION': 'no label', 'RESERVAS Y': 'no label', 'OTROS': 'no label', 'LOCALIDAD': 'no label', 'TIPO DE AM': 'no label', 'QU� HIZO': 'no label', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'no label', 'ESTADO': 'no label', });
lyr_Caceria_15.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', 'field_20': 'hidden field', 'field_21': 'hidden field', });
lyr_Ganado_16.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', 'field_20': 'hidden field', 'field_21': 'hidden field', });
lyr_Invasin_17.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', 'field_20': 'hidden field', 'field_21': 'hidden field', });
lyr_Perros_18.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Tala_19.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'no label', 'FECHA': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', 'field_20': 'hidden field', 'field_21': 'hidden field', });
lyr_Conflictogentefauna_20.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', 'field_20': 'hidden field', 'field_21': 'hidden field', });
lyr_Derrumbe_21.set('fieldLabels', {'REGISTRADO': 'no label', 'DISTANCIA_': 'hidden field', 'DESNIVEL_A': 'hidden field', 'TIEMPO_TOT': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', 'field_20': 'hidden field', });
lyr_Aperturadecaminosotrocha_22.set('fieldLabels', {'REGISTRADO': 'no label', 'DISTANCIA_': 'hidden field', 'DESNIVEL_A': 'hidden field', 'TIEMPO_TOT': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Caceria_23.set('fieldLabels', {'REGISTRADO': 'no label', 'DISTANCIA_': 'hidden field', 'DESNIVEL_A': 'hidden field', 'TIEMPO_TOT': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Ganado_24.set('fieldLabels', {'REGISTRADO': 'no label', 'DISTANCIA_': 'hidden field', 'DESNIVEL_A': 'hidden field', 'TIEMPO_TOT': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Inundacion_25.set('fieldLabels', {'REGISTRADO': 'no label', 'DISTANCIA_': 'hidden field', 'DESNIVEL_A': 'hidden field', 'TIEMPO_TOT': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Mineria_26.set('fieldLabels', {'REGISTRADO': 'no label', 'DISTANCIA_': 'hidden field', 'DESNIVEL_A': 'hidden field', 'TIEMPO_TOT': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Roboodao_27.set('fieldLabels', {'REGISTRADO': 'no label', 'DISTANCIA_': 'hidden field', 'DESNIVEL_A': 'hidden field', 'TIEMPO_TOT': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', 'field_20': 'hidden field', });
lyr_Tala_28.set('fieldLabels', {'REGISTRADO': 'no label', 'DISTANCIA_': 'hidden field', 'DESNIVEL_A': 'hidden field', 'TIEMPO_TOT': 'hidden field', 'FECHA': 'no label', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO DE AM': 'hidden field', 'QU� HIZO': 'hidden field', 'FOTOGRAF��': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Derrumbe_29.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Ganado_30.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Basura_31.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Contaminacinlquidos_32.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Entradasinpermiso_33.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Derrumbe_34.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Ganado_35.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Quema_36.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Roboodaodeinfraestructura_37.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Roboodaodeinfraestructura_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});