<script>
    import {
        onMount
    } from 'svelte';
    import {dataStore, mapStore} from '../stores'

    let container;
    let map;
    let popup;
    let clickPopup;

    onMount(() => {
        map = new mapboxgl.Map({
            container: 'map',
            style: carto.basemaps.voyager,
            center: [-76.358493, 42.650281],
            zoom: 5.3
        });

        //set map to store
        mapStore.set(map)
    })

    $: {
        //init sources and layers
        if (map && $dataStore && !popup) {
            const countySource = new carto.source.GeoJSON($dataStore.county);
            const facilitySource = new carto.source.GeoJSON($dataStore.facility);
            console.log($dataStore.facility)
            const countyLayer = new carto.Layer('county', countySource, new carto.Viz(`
                color: ramp(
                    zoomRange([6,10]),
                        [opacity(ramp(buckets($lawsuits_per_10000, [0,1,11,51,101,150]),
                        [#d8d9da, #e2f7fe,#bfe1ec,#91c4db,#69b1ce,#006a92,#003b54]),1)
                        opacity(ramp(buckets($lawsuits_per_10000, [0,1,11,51,101,150]),
                        [#d8d9da, #e2f7fe,#bfe1ec,#91c4db,#69b1ce,#006a92,#003b54]),0.85)
                    ]
                    )
                strokeWidth: 1
                strokeColor: ramp(zoomRange([6,8]),[#f9f9f9,#959595])
            `));

            const facilityLayer = new carto.Layer('facility', facilitySource, new carto.Viz(`
                @category: ramp($system,prism)
                @name: $name
                @system: $system
                @lawsuits: $lawsuits
                @link: $link
                @windfall: $windfall
                width: ramp(zoomrange([5,6.5,10]),[1.5,4,scaled($lawsuits,16) + 2])
                strokeColor: ramp(zoomRange([5,7]),[#f9f9f9,#959595])
                color: ramp(zoomRange([5,7]),[white,opacity(@category,0.8)])
            `));

            countyLayer.addTo(map);
            facilityLayer.addTo(map);


            //popup
            function generatePopupHTML(features) {
                return features.map(feature => {
                    const {name, system, lawsuits, link, windfall} = feature.variables
                    return `
                            <h4><a target="_blank" href="${link.value}">${name.value}</a></h4>
                            ${system ? `<p><strong>System:</strong> ${system.value}</p>` : ''}
                            <p><strong>Amount of Lawsuits:</strong> ${lawsuits.value}</p>
                            ${windfall ? `<p><strong>2018 ICP Excess:</strong> ${windfall.value}</p>` : ''}
                        `
                }).join('<br/>')

            }

            const interactivity = new carto.Interactivity(facilityLayer);
            interactivity.on('featureClick', featureEvent => {
                //create a click popup that will stay
                const coords = featureEvent.coordinates;
                const features = featureEvent.features;

                if (features.length > 0) {
                    let html = generatePopupHTML(features)

                    if (clickPopup) clickPopup.remove()

                    map.getCanvas().style.cursor = 'pointer';
                    clickPopup = new mapboxgl.Popup()
                            .setLngLat([coords.lng, coords.lat])
                            .setHTML(html)
                            .addTo(map);

                }
            });

            interactivity.on('featureHover', featureEvent => {
                const coords = featureEvent.coordinates;
                const features = featureEvent.features;

                if (features.length > 0) {
                    let html = generatePopupHTML(features)

                    if (popup) popup.remove()

                    //only allow hover over , if clickup popup is not open
                    if (!clickPopup || !clickPopup._closeButton.isConnected) {
                        map.getCanvas().style.cursor = 'pointer';
                        popup = new mapboxgl.Popup()
                                .setLngLat([coords.lng, coords.lat])
                                .setHTML(html)
                                .addTo(map);
                    }


                }
            });

            interactivity.on('featureLeave', featureEvent => {
                map.getCanvas().style.cursor = '';
                if (popup) popup.remove()
            })
        }
    }

</script>

<div class="content">
    <div id="map" bind:this={container}></div>
</div>

<style>
    .content {
        height: 500px;
        flex: 1 1 340px;
        min-width: 340px;
        overflow: auto;
        background: #ebebeb;
        display: flex;
        flex-direction: column;
    }

    #map {
        width: 100%;
        height: 100%;
    }

    :global(.mapboxgl-popup-content) {
        overflow: auto;
        max-height: 200px;
    }

    :global(.mapboxgl-popup-content p, h4) {
        margin: 0px 5px;
    }
</style>